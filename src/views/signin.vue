<template>
    <div class="signin">
        <div>
            <h2>用户登录</h2>
        </div>
        <div class="wrapper">
            <div class="img-container">
                <img
                    src="https://owl-town.oss-cn-chengdu.aliyuncs.com/img/bg-signin.jpg"
                />
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
                    <el-form-item label="用户名" prop="username">
                        <el-input
                            size="mini"
                            v-model="form.username"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
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
                        <router-link to="/signup" style="color: #b5b5b5"
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
import { entry } from '@/mixin/service/entry.js'

export default {
    name: 'signin',
    mixins: [entry],
    components: { Vcode },
    data() {
        return {
            isShow: false,
            form: {
                username: '',
                password: ''
            },
            formRules: {
                username: [
                    {
                        required: true,
                        message: '请输入您的用户名！',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 15,
                        message: '长度在 3 到 15 之间',
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
            this.signin({
                username: this.form.username,
                password: this.form.password
            })
        },
        close() {
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
.signin {
    margin: 1% 15%;

    .wrapper {
        display: flex;
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
