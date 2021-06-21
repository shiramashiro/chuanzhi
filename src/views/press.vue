<template>
    <div class="press">
        <owl-category-bar></owl-category-bar>
        <div class="press-wrap">
            <div
                class="press-info owl-card owl-padding-md owl-border-radius-xs flex align-center"
            >
                <el-image :src="press.cover"></el-image>
                <div class="press-profile owl-margin-le-lg owl-font-size-md">
                    {{ press.profile }}
                </div>
            </div>
            <div class="books owl-margin-top-lg flex">
                <owl-book-verbose-fiche
                    class="owl-full-he-wi"
                    v-for="(item, index) in bookshelfs"
                    :key="index"
                    :data="item"
                    :margin="'20px 12px'"
                    :url="'/verbose/' + item.id"
                ></owl-book-verbose-fiche>
            </div>
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    name: 'category',
    mixins: [service],
    data() {
        return {
            press: {}
        }
    },
    mounted() {
        this.$axios.all([
            this.getBookshelfByPressId(this.$route.params.pressId),
            this.$axios
                .post('/get/press/by/id/' + this.$route.params.pressId)
                .then(res => {
                    this.press = res.data.data
                })
        ])
    }
}
</script>

<style scoped>
.press-wrap {
    margin: 1% 15%;
}

.books {
    flex-wrap: wrap;
}
</style>
