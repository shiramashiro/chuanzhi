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
            <el-form-item class="form-item" label="邮箱：" prop="email">
                <el-input v-model="form.email" size="mini"></el-input>
            </el-form-item>
            <el-form-item class="form-item" label="用户名：" prop="username">
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
            <el-form-item
                class="form-item"
                label="重复密码："
                prop="rePassword"
            >
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
                <el-button @click="submit()"
                    >同意并注册<i class="el-icon-check el-icon--right"></i
                ></el-button>
            </el-form-item>
        </el-form>
        <div class="tips">
            <router-link style="color: #b5b5b5" to="/signin"
                >已有账号？点击登陆</router-link
            >
        </div>
        <Vcode :show="isShow" @success="success" @close="close" />
    </div>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'
import { entry } from '@/mixin/service/entry.js'
import { utils } from '@/mixin/utils/index.js'

export default {
    name: 'signup',
    mixins: [entry, utils],
    components: { Vcode },
    data() {
        return {
            isShow: false,
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
                    {
                        required: true,
                        message: '请输入您的邮箱！',
                        trigger: 'blur'
                    },
                    {
                        min: 10,
                        max: 100,
                        message: '长度至少是 10 个字符',
                        trigger: 'blur'
                    }
                ],
                username: [
                    {
                        required: true,
                        message: '请输入您的用户名！',
                        trigger: 'blur'
                    },
                    {
                        min: 4,
                        max: 15,
                        message: '长度在 4 到 15 之间',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入您的密码！',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 20,
                        message: '长度在 6 到 20 之间',
                        trigger: 'blur'
                    }
                ],
                rePassword: [
                    {
                        required: true,
                        message: '请重复您的密码！',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 20,
                        message: '长度在 6 到 20 之间',
                        trigger: 'blur'
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: '请重复您的联系电话！',
                        trigger: 'blur'
                    },
                    {
                        min: 11,
                        max: 11,
                        message: '电话号码必须是 11 位数',
                        trigger: 'blur'
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: '请选择性别！',
                        trigger: 'change'
                    }
                ],
                profile: [
                    {
                        required: true,
                        message: '请填写个人简介！',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate(valida => {
                if (!valida) return false
                this.isShow = true
            })
        },
        success() {
            this.isShow = false
            this.signup({
                username: this.form.username,
                password: this.form.password,
                sex: this.form.sex,
                profile: this.form.profile,
                phone: this.form.phone,
                email: this.form.email,
                level: 1,
                date: this.formatDate('line', 'full')
            })
        },
        close() {
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
.signup {
    margin: 1% 15%;

    .form {
        padding: 0 20%;
    }

    .tips {
        text-align: center;
        font-size: 13px;
        margin-top: 60px;
    }
}
</style>
