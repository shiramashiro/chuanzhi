<template>
  <div class="bread-crumb">
    <div class="crumb-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in nav"
          :key="index"
          :to="item.href"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <el-image style="width: 100%; border-radius: 4px" :src="img"></el-image>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    nav: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumb {
  .crumb-nav {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 15px 0;
  }
}
</style>
