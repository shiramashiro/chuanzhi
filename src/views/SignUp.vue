<template>
  <div class="signup">
    <el-form>
      <el-form-item label="邮箱">
        <el-input size="mini"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.signup {
  padding: 1% 15%;
}
</style>
