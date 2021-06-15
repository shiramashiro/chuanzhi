/**
 * 检查变量是否为undefined或''
 *
 * @param  {...any} params 变量值，可检测多个
 */
export const checkVal = function f(...params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === undefined) {
            throw ReferenceError(`参数不能为undefined`)
        } else if (params[i] === '') {
            throw ReferenceError(`参数不能为''`)
        }
    }
}

/**
 *
 * 计算数组中所有元素的总和
 *
 * @param {Array} data
 * @returns 总和
 */
export const statistics = function f(data) {
    let total = 0
    data.forEach(element => {
        total += element.price * element.num
    })
    return total
}
