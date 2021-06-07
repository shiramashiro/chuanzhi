<template>
    <div class="book">书籍详情页，当前查看的书籍ID为：{{ id }}</div>
</template>

<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    created() {
        this.id = this.$route.params.id
    }
}
</script>

<style lang="scss" scoped></style>
