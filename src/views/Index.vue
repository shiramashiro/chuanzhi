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
                            v-for="(item, index) in hotBooks"
                            :key="index"
                            :url="'/book/' + item.id"
                            :data="item"
                        ></owl-book-fiche>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            carouselItems: [
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032619353510220.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/20210326193508509.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032611362390127.jpg'
            ],
            // 获取数据库中的数据
            hotBooks: [
                {
                    id: 1,
                    type: 'hot',
                    preview: 'http://img3m0.ddimg.cn/13/17/22722790-1_u_31.jpg',
                    title: 'JavaScript权威指南',
                    authors: ['(美)David Flanagan（弗兰纳根）'],
                    price: 90.4
                },
                {
                    id: 2,
                    type: 'hot',
                    preview: 'http://img3m0.ddimg.cn/80/13/23214590-1_w_9.jpg',
                    title: '高性能MySQL',
                    authors: ['(美)施瓦茨', '(美)扎伊采夫', '(美)特卡琴科'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'hot',
                    preview: 'http://img3m5.ddimg.cn/55/8/28495225-1_w_7.jpg',
                    title: '深入理解Java虚拟机',
                    authors: ['周志明'],
                    price: 22.22
                }
            ]
        }
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
