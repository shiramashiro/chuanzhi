import { checkVal } from '@/utils/index.js'

/**
 * 用于处理评论业务逻辑层
 *
 * @author 郑人滏
 * @version 1.0
 * @since 2021年6月15日00:28:35
 */
export const comment = {
    data() {
        return {
            comments: []
        }
    },
    methods: {
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
