<template>
    <div class="collect-bookshelf">
        <h2>书籍收藏</h2>
        <div class="flex justify-between">
            <owl-book-fiche
                v-for="(item, index) in collectBookshelfs"
                :key="index"
                :url="'/verbose/' + item.bookshelf.id"
                :data="item.bookshelf"
            ></owl-book-fiche>
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    mixins: [service],
    mounted() {
        this.getCollectBookshelf()
    }
}
</script>

<style scoped>
.collect-bookshelf {
    margin: 1% 15%;
    flex-wrap: wrap;
}
</style>
