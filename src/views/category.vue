<template>
    <div class="category">
        <owl-category-bar />
        <div class="books flex justify-between">
            <owl-book-fiche
                v-for="(item, index) in bookshelfs"
                :key="index"
                :data="item"
                :margin="'20px 12px'"
                :width="'165px'"
                :url="'/verbose/' + item.id"
            ></owl-book-fiche>
        </div>
    </div>
</template>

<script>
import { service } from '@/mixin/service/index.js'

export default {
    name: 'category',
    mixins: [service],
    data() {
        return {}
    },
    watch: {
        $route() {
            this.geBookshelfsByTypes(this.$route.params.types)
        }
    },
    mounted() {
        this.geBookshelfsByTypes(this.$route.params.types)
    }
}
</script>

<style scoped>
.books {
    margin: 1% 15%;
    flex-wrap: wrap;
}
</style>
