/**
 * 登陆业务
 *
 * @author 郑人滏
 * @version 1.0
 * @since 2021年6月15日19:16:00
 */
export const entry = {
    data() {
        return {}
    },
    methods: {
        /**
         * 登陆
         *
         * @param {Object} params 参数
         */
        signin(params) {
            this.$axios
                .post('/signin', params)
                .then(res => {
                    if (res.data.code === 200) {
                        sessionStorage.setItem('userId', res.data.data.id)
                        sessionStorage.setItem(
                            'userInfo',
                            JSON.stringify(res.data.data)
                        )
                        this.$message({
                            type: 'success',
                            message: res.data.message
                        })
                        setTimeout(() => {
                            this.$router.push('/')
                        }, 1500)
                    } else if (res.data.code === 500) {
                        this.$message({
                            type: 'error',
                            message: res.data.message
                        })
                    }
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '登陆失败，服务器错误'
                    })
                })
        },
        /**
         * 注册
         *
         * @param {Object} params 参数
         */
        signup(params) {
            this.$axios
                .post('/signup', params)
                .then(res => {
                    if (res.data.code === 200) {
                        this.$message({
                            type: 'success',
                            message: res.data.message
                        })
                        setTimeout(() => {
                            this.$router.push('/signin')
                        }, 1500)
                    } else if (res.data.code === 500) {
                        this.$message({
                            type: 'error',
                            message: res.data.message
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            menubar: res.data.message
                        })
                    }
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '注册失败，服务器错误'
                    })
                })
        }
    }
}
