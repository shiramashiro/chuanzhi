<template>
    <div class="category">
        <owl-category-bar />
        <div class="books flex justify-between">
            <owl-book-fiche
                :margin="'20px 12px'"
                :width="'165px'"
                v-for="(item, index) in books"
                :key="index"
                :url="'/book/' + item.id"
                :data="item"
            ></owl-book-fiche>
        </div>
    </div>
</template>

<script>
export default {
    name: 'category',
    data() {
        return {
            books: [
                {
                    id: 1,
                    type: 'a',
                    preview: 'http://img3m0.ddimg.cn/13/17/22722790-1_u_31.jpg',
                    title: 'JavaScript权威指南',
                    authors: ['(美)David Flanagan（弗兰纳根）'],
                    price: 90.4
                },
                {
                    id: 2,
                    type: 'b',
                    preview: 'http://img3m0.ddimg.cn/80/13/23214590-1_w_9.jpg',
                    title: '高性能MySQL',
                    authors: ['(美)施瓦茨', '(美)扎伊采夫', '(美)特卡琴科'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'c',
                    preview: 'http://img3m5.ddimg.cn/55/8/28495225-1_w_7.jpg',
                    title: '深入理解Java虚拟机',
                    authors: ['周志明'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'c',
                    preview: 'http://img3m5.ddimg.cn/55/8/28495225-1_w_7.jpg',
                    title: '深入理解Java虚拟机',
                    authors: ['周志明'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'c',
                    preview: 'http://img3m5.ddimg.cn/55/8/28495225-1_w_7.jpg',
                    title: '深入理解Java虚拟机',
                    authors: ['周志明'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'c',
                    preview: 'http://img3m5.ddimg.cn/55/8/28495225-1_w_7.jpg',
                    title: '深入理解Java虚拟机',
                    authors: ['周志明'],
                    price: 22.22
                },
                {
                    id: 3,
                    type: 'c',
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
.books {
    margin: 1% 15%;
    flex-wrap: wrap;
}
</style>
