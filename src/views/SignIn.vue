<template>
  <div class="signup">
    <div>
      <h2>会员登录</h2>
    </div>
    <div class="wrapper">
      <div class="img-container">
        <img src="@/assets/img/myad.jpg" />
      </div>
      <div class="form-container">
        <el-form
          class="form"
          :rules="formRules"
          ref="form"
          :model="form"
          :hide-required-asterisk="true"
          label-width="100px"
        >
          <el-form-item label="会员名：" prop="username">
            <el-input size="mini" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              size="mini"
              v-model="form.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submit">登录</el-button>
          </el-form-item>
          <div class="tips">
            <router-link to="/signup" style="color: #b5b5b5;"
              >没有账号？点击注册</router-link
            >
          </div>
        </el-form>
      </div>
    </div>
    <Vcode :show="isShow" @success="success" @close="close" />
  </div>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'

export default {
  name: 'SignUp',
  components: {
    Vcode
  },
  data() {
    return {
      isShow: false,
      form: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入您的会员名！', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 4 到 15 之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码！', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valida => {
        if (!valida) {
          return false
        } else {
          this.isShow = true
        }
      })
    },
    success(time) {
      this.isShow = false
      this.$message({
        type: 'success',
        duration: 2000,
        message: '验证通过使用' + Math.floor(Number(time) * 100) / 100 + 's'
      })
      // 验证通过，发起异步请求
      console.log('发起了登录请求')
    },
    close() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  padding: 1% 15%;

  .wrapper {
    justify-content: normal !important;

    .form-container {
      width: 100%;
      display: block;
      &:before {
        content: ' ';
        display: inline-block;
        vertical-align: middle;
        height: 26%;
      }

      .tips {
        text-align: center;
        font-size: 13px;
        margin-top: 60px;
      }
    }
  }
}
</style>
