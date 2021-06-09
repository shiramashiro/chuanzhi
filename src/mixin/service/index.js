import { checkVal } from '../../utils/index.js'

/**
 * service层
 *
 * @author 郑人滏（shiramashiro）
 * @version 1.0
 * @since 2021年6月10日01:31:20
 */
export const service = {
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
                .post('/get/book/' + types)
                .then(res => {
                    this.result = res.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
