<template>
    <div class="index">
        <owl-category-bar />
        <div class="index-wrapper">
            <el-carousel
                class="carousel owl-margin-bm-lg"
                height="395px"
                direction="vertical"
                :autoplay="true"
                :loop="true"
            >
                <el-carousel-item
                    v-for="(item, index) in carouselItems"
                    :key="index"
                >
                    <img class="owl-full-he-wi" :src="item" />
                </el-carousel-item>
            </el-carousel>
            <div class="row-1 flex">
                <div class="col-1 owl-font-size-md">
                    <div class="owl-font-size-lg">
                        <i class="el-icon-bell">公告板</i>
                    </div>
                    <div class="owl-margin-top-lg owl-font-size-sm">
                        <div>尊敬的传智书城用户：</div>
                        <div class="owl-margin-top-sm">
                            为了让大家有更高的购物体验，3月25日起，当日达业务关小黑屋回炉升级！具体开放时间请留意公告，感谢大家的支持与理解，祝大家购物愉快！
                        </div>
                        <div style="float: right" class="owl-margin-top-sm">
                            3月10日，传智播客 传智书城系统管理部
                        </div>
                    </div>
                </div>
                <div class="col-2 owl-margin-le-lg">
                    <div class="content flex align-center justify-between">
                        <owl-book-fiche
                            v-for="(item, index) in hotBookshelfs"
                            :key="index"
                            :data="item"
                            :url="'/verbose/' + item.id"
                        ></owl-book-fiche>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    name: 'index',
    mixins: [service],
    data() {
        return {
            carouselItems: [
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032619353510220.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/20210326193508509.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032611362390127.jpg'
            ]
        }
    },
    mounted() {
        this.getLiteratureByLimitAndSymbol(10, 'hot')
    }
}
</script>

<style scoped>
.index-wrapper {
    margin: 1% 15%;
}

.row-1 {
    height: 270px;
}

.col-1,
.col-2 {
    width: 50%;
}
</style>
