/**
 * 这个文档用于处理所有cookie
 *
 * 创建时间：2019-10-10
 */

/**
 * 写cookies一天过期
 *
 * @param name
 * @param value
 */
function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 60 * 60 * 1000 * 24);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

/**
 * 读取cookies
 *
 * @param name
 * @returns {string|null}
 */
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

/**
 * 删除cookise
 *
 * @param name
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 60 * 60 * 1000);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}

export {
    setCookie,
    getCookie,
    delCookie
}