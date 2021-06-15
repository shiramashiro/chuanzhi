import { checkVal, statistics } from '@/utils/index.js'

/**
 * service层
 *
 * @author 郑人滏（shiramashiro）
 * @version 1.1
 * @since 2021年6月10日01:31:20
 */
export const service = {
    data() {
        return {
            bookshelfs: [],
            bookshelf: {},
            comments: [],
            trolley: [],
            trolleyTotalPrice: 0,
            trolleyItemNum: 0,
            indents: []
        }
    },
    methods: {
        /**
         *
         * 通过书籍类型获取书籍。
         *
         * types可选值有：literature | living | computer | language | business | motivation | social | academic | children
         * art | origin | technology | examine | encyclopedia | all
         *
         * @param {string} types 书籍类型
         */
        geBookshelfsByTypes(types) {
            checkVal(types)
            this.$axios.post('/get/bookshelfs/by/types/' + types).then(res => {
                this.bookshelfs = res.data
            })
        },
        /**
         * 通过书籍ID获取书籍。
         *
         * @param {string} id 书籍id
         */
        getBookshelf(id) {
            checkVal(id)
            this.$axios.post('/get/bookshelf/' + id).then(res => {
                this.bookshelf = res.data
            })
        },
        /**
         * 根据书籍id获取评论。
         *
         * @param {string} id 书籍id
         */
        getComments(id, type) {
            checkVal(id)
            this.$axios
                .post('/get/comments', {
                    bookshelfId: id,
                    type: type
                })
                .then(res => {
                    this.comments = res.data
                })
        },
        /**
         * 添加评论。
         *
         * @param {Object} comment 评论数据
         */
        setComment(comment) {
            this.$axios
                .post('/set/comment', comment)
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '发表成功'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '发表失败，服务器错误'
                    })
                })
        },

        /**
         * =======================================================================================================
         * =====================购物车与订单相关的业务逻辑=========================================================
         * ======================================================================================================
         */

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
                    res.data.forEach(element => {
                        this.trolleyItemNum += element.num
                    })
                    this.trolleyTotalPrice = statistics(res.data)
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
         * @param {Object} bookshelf 书籍信息
         */
        setTrolleyRow(bookshelf, num) {
            this.$axios
                .post('/set/trolley/row', {
                    id: bookshelf.id,
                    userId: '60c1ab65a7297656dd5a9f31',
                    title: bookshelf.title,
                    price: bookshelf.price,
                    total: bookshelf.price * num,
                    num: num
                })
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '成功加入购物车'
                    })
                })
        },
        /**
         * 点击结算，将购物车信息添加到订单中。
         *
         * 1. 统计购物车的小计；
         * 2. 将小计与购物车的数据和当前登录的用户ID传给后台进行数据录入工作；
         * 3. 如果第2步完成，则删除购物车数据，并提示用户结算成功，且清空数据库中的该用户的购物车信息。
         */
        setIndent() {
            this.$axios
                .post('/set/indent', {
                    userId: '60c1ab65a7297656dd5a9f31',
                    trolley: this.trolley,
                    total: this.trolleyTotalPrice,
                    receiveName: this.ruleForm.receiveName,
                    receivePhone: this.ruleForm.receivePhone,
                    receiveLocation: this.ruleForm.receiveLocation,
                    payWay: '线上支付',
                    status: '正在运输'
                })
                .then(res => {
                    this.trolley.splice(0, this.trolley.length)
                    this.$message({
                        type: 'success',
                        message: '结算成功'
                    })
                    this.$router.push('/success/settlement')
                    this.deleteTrolleyRows('60c1ab65a7297656dd5a9f31')
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '结算失败，服务器错误'
                    })
                })
        },
        getIndents() {
            this.$axios
                .post('/get/indents', {
                    userId: '60c1ab65a7297656dd5a9f31'
                })
                .then(res => {
                    this.indents = res.data
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '获取信息失败，服务器错误'
                    })
                })
        },
        deleteIndent(id, index) {
            this.$axios
                .post('/delete/indent', {
                    id: id
                })
                .then(res => {
                    this.indents.splice(index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '删除失败，服务器错误'
                    })
                })
        }
    }
}
