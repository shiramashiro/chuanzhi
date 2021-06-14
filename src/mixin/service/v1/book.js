import { checkVal } from '@/utils/index.js'

/**
 * 用于处理书籍业务逻辑层
 *
 * @author 郑人滏
 * @version 1.0
 * @since 2021年6月15日00:28:07
 */
export const book = {
    data() {
        return {
            books: [],
            book: {}
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
        }
    }
}
