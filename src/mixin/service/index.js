import { checkVal } from '../../utils/index.js'

/**
 * service层
 *
 * @author 郑人滏（shiramashiro）
 * @version 1.0
 * @since 2021年6月10日01:31:20
 */
export const service = {
    data() {
        return {
            books: [],
            book: {},
            comments: []
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
        getBooksByTypes(types) {
            checkVal(types)
            this.$axios
                .post('/get/books/by/types/' + types)
                .then(res => {
                    this.books = res.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        /**
         * 通过书籍ID获取书籍。
         *
         * @param {string} id 书籍id
         */
        getBookById(id) {
            checkVal(id)
            this.$axios
                .post('/get/book/by/id/' + id)
                .then(res => {
                    this.book = res.data
                })
                .catch(err => {
                    console.error(err)
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
                    id: id,
                    type: type
                })
                .then(res => {
                    this.comments = res.data
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
}
