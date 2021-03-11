<template>
  <div class="signup">
    <div>
      <h2>新会员注册</h2>
    </div>
    <el-form
      class="form"
      :rules="formRules"
      ref="form"
      :model="form"
      :hide-required-asterisk="true"
      label-width="100px"
    >
      <el-form-item class="form-item" label="会员邮箱：" prop="email">
        <el-input v-model="form.email" size="mini"></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="会员名：" prop="username">
        <el-input v-model="form.username" size="mini"></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="密码：" prop="password">
        <el-input
          v-model="form.password"
          size="mini"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="重复密码：" prop="rePassword">
        <el-input
          v-model="form.rePassword"
          size="mini"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="性别：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="form-item" label="联系电话：" prop="phone">
        <el-input v-model="form.phone" size="mini"></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="个人简介：" prop="profile">
        <el-input
          v-model="form.profile"
          size="mini"
          type="textarea"
          :rows="3"
          maxlength="50"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit"
          >同意并注册<i class="el-icon-check el-icon--right"></i
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        rePassword: '',
        sex: '男',
        phone: '',
        profile: ''
      },
      formRules: {
        email: [
          { required: true, message: '请输入您的会员邮箱！', trigger: 'blur' },
          {
            min: 10,
            max: 100,
            message: '长度至少是 10 个字符',
            trigger: 'blur'
          }
        ],
        username: [
          { required: true, message: '请输入您的会员名！', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 4 到 15 之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码！', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 之间', trigger: 'blur' }
        ],
        rePassword: [
          { required: true, message: '请重复您的密码！', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 之间', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请重复您的联系电话！', trigger: 'blur' },
          {
            min: 11,
            max: 11,
            message: '电话号码必须是 11 位数',
            trigger: 'blur'
          }
        ],
        sex: [{ required: true, message: '请选择性别！', trigger: 'change' }],
        profile: [
          { required: true, message: '请填写个人简介！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valida => {
        if (!valida) return false
        console.log('s')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  padding: 1% 15%;

  .form {
    padding: 0 20%;
  }
}
</style>
