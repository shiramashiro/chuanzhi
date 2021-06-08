/**
 * 主要抽取适用于视图渲染时所需要的函数。
 *
 * @author 郑人滏（shiramashiro）
 * @version 1.0
 * @since 2021年6月8日18:07:26
 */
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
        },
        /**
         * 格式化时间。
         *
         * @param {string} mode 转换的模式，以“04月08日”或“04-08”形式格式化日期。可传入ch和line。
         * @param {string} style full-年月日时分、month-月日时分、day-月日、hours-时分，格式化后的时间以年月日时分的格式还是月日时分或者时分。
         * @param {Number} moreOrLess 以秒为单位对格式化的当前时间进行增或减，如比当前时间增加1秒
         * @returns 格式化后的时间
         */
        formatDate(mode = 'ch', style = 'full', moreOrLess = undefined) {
            let date = new Date()
            if (moreOrLess !== undefined) {
                date.setMilliseconds(date.getMilliseconds() + moreOrLess)
            }
            let formated = ''
            if (mode === 'ch') {
                if (style === 'full') {
                    formated =
                        date.getFullYear() +
                        '年' +
                        (date.getMonth() + 1) +
                        '月' +
                        date.getDate() +
                        '日' +
                        date.getHours() +
                        '时' +
                        date.getMinutes()
                } else if (style === 'month') {
                    formated =
                        date.getMonth() +
                        1 +
                        '月' +
                        date.getDate() +
                        '日' +
                        date.getHours() +
                        '时' +
                        date.getMinutes()
                } else if (style === 'day') {
                    formated =
                        date.getMonth() + 1 + '月' + date.getDate() + '日'
                } else if (style === 'hours') {
                    formated = date.getHours() + '时' + date.getMinutes()
                }
            } else if (mode === 'line') {
                if (style === 'full') {
                    formated =
                        date.getFullYear() +
                        '-' +
                        (date.getMonth() + 1) +
                        '-' +
                        date.getDate() +
                        ' ' +
                        date.getHours() +
                        ':' +
                        date.getMinutes()
                } else if (style === 'month') {
                    formated =
                        date.getMonth() +
                        1 +
                        '-' +
                        date.getDate() +
                        ' ' +
                        date.getHours() +
                        ':' +
                        date.getMinutes()
                } else if (style === 'day') {
                    formated = date.getMonth() + 1 + '-' + date.getDate()
                } else if (style === 'hours') {
                    formated = date.getHours() + ':' + date.getMinutes()
                }
            }
            return formated
        },
        /**
         * 将整数转换为万位或亿位，并保留小数点。
         *
         * 有如下例子：
         * 1. 12322，转换为1.23万；
         * 2. 123342，转换为12.33万；
         * 3. 1234353，转换为123.43万；
         * 4. 13234541，转换为0.13亿；
         * 5. 132143251，转换为1.32亿；
         * 6. 1234325123，转换为12.34亿。
         *
         * figuresUnit可选值有th和bi，分别代表保留位数为千位和亿位。
         *
         * @param {Number} figuresUnit 转换为什么位数
         * @param {Number} targetFigures 被转换的整数
         * @param {Number} digit 保留多少位小数
         */
        shiftIntegerToDecimal(figuresUnit, targetFigures, digit = 2) {
            let saveDigit = 10
            for (let index = 1; index < digit; index++) {
                saveDigit = saveDigit * 10
            }
            let shiftedFigures = 0
            switch (figuresUnit) {
                case 'th':
                    shiftedFigures =
                        Math.round((targetFigures / 10000) * saveDigit) /
                        saveDigit
                    break
                case 'bi':
                    shiftedFigures =
                        Math.round((targetFigures / 100000000) * saveDigit) /
                        saveDigit
                    break
            }
            return shiftedFigures
        }
    }
}
