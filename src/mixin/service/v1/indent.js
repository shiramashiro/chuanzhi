import { checkVal } from '@/utils/index.js'

/**
 * 处理订单业务逻辑层
 *
 * @author 郑人滏
 * @version 1.0
 * @since 2021年6月15日00:24:46
 */
export const indent = {
    data() {
        return {}
    },
    methods: {
        /**
         * 点击结算，将购物车信息添加到订单中。
         *
         * 1. 统计购物车的小计；
         * 2. 将小计与购物车的数据和当前登录的用户ID传给后台进行数据录入工作；
         * 3. 如果第2步完成，则删除购物车数据，并提示用户结算成功，且清空数据库中的该用户的购物车信息。
         */
        setIndent() {
            let subtotal = 0
            for (let index = 0; index < this.trolley.length; index++) {
                subtotal += this.trolley[index].total
            }
            this.$axios
                .post('/set/indent', {
                    userId: '60c1ab65a7297656dd5a9f31',
                    trolley: this.trolley,
                    total: subtotal
                })
                .then(res => {
                    this.trolley.splice(0, this.trolley.length)
                    this.$message({
                        type: 'success',
                        message: '结算成功'
                    })
                    this.deleteTrolleyRows('60c1ab65a7297656dd5a9f31')
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '结算失败，服务器错误'
                    })
                })
        }
    }
}
