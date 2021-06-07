export const stringUtils = {
    methods: {
        /**
         * 除了最后一个元素以外，数组中的每一个元素末尾处都拼接一个特定的字符。
         *
         * @param {Object} character 拼接的字符
         * @param {Array} target 目标数组
         */
        concatWith(character = '，', target) {
            let concated = ''
            if (target !== undefined) {
                for (let i = 0; i < target.length; i++) {
                    if (target.length === i + 1) {
                        concated += target[i]
                    } else {
                        concated += target[i] + character
                    }
                }
            } else {
                throw ReferenceError(`参数不能为undefined`)
            }
            return concated
        },
        /**
         * 拼接url。
         *
         * 当传递的参数为undefined时，返回原来的url。
         * 当传递的参数的长度为1时，拼接?keys[0]=values[0]；
         * 当传递的参数的长度大于1时，拼接?keys[0]=values[0]&keys[1]=values[1]...
         *
         * @param {string} url 传递url字符串
         * @param {Object} args 传递一个参数对象
         */
        concatUrl(url, args) {
            let keys = Object.keys(args)
            let values = Object.values(args)
            if (args !== undefined) {
                url += '?' + keys[0] + '=' + values[0]
                if (keys.length > 1) {
                    for (let i = 1; i < keys.length; i++) {
                        url += '&' + keys[i] + '=' + values[i]
                    }
                }
            }
            return url
        }
    }
}
