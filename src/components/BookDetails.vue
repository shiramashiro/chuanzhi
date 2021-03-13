<template>
  <div class="book-details">书籍详情页，当前查看的书籍ID为：{{ bookId }}</div>
</template>

<script>
export default {
  data() {
    return {
      bookId: 0
    }
  },
  created() {
    this.bookId = this.$route.params.bookId
  }
}
</script>

<style lang="scss" scoped></style>