import { checkVal } from '@/utils/index.js'

/**
 * 处理购物车业务逻辑层
 *
 * @author 郑人滏
 * @version 1.0
 * @since 2021年6月15日00:26:15
 */
export const trolley = {
    data() {
        return {
            trolley: []
        }
    },
    methods: {
        /**
         * 根据用户ID获取用户的购物车信息。
         *
         * @param {string} userId 用户ID
         */
        getTrolleyRows(userId) {
            checkVal(userId)
            this.$axios
                .post('/get/trolley/rows', {
                    userId: userId
                })
                .then(res => {
                    this.trolley = res.data
                })
        },
        /**
         * 删除当前用户操作的购物车行。
         *
         * @param {Number} index 当前操作的行索引
         * @param {string} id 当前操作的行在数据库中的ID
         */
        deleteTrolleyRow(index, id) {
            checkVal(id)
            this.$axios
                .post('/delete/trolley/row', {
                    id: id
                })
                .then(res => {
                    this.trolley.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '已成功删除'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '删除失败，服务器错误'
                    })
                })
        },
        /**
         * 删除该用户的所有购物车信息。
         *
         * @param {string} userId 用户ID
         */
        deleteTrolleyRows(userId) {
            this.$axios.post('/delete/trolley/rows', {
                userId: userId
            })
        },
        /**
         * 添加一条商品到购物车中。
         *
         * @param {string} userId 用户ID
         */
        setTrolleyRow(userId) {
            checkVal(userId)
            this.$axios.post('/set/trolley/row', {
                id: id
            })
        }
    }
}
