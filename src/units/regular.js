/**
 * 这个文档用于处理所有js正则操作
 *
 * 创建时间：2019-10-10
 */

/**
 * 检查文本中是否包含除了中文数字英文字母外的所有特殊符号
 *
 * @param {String} string 要检查的字符串
 * @return {Boolean} 如果存在则返回true，否则返回false
 */
function isSpecialCharacters(string) {
    var reg = /[^\u4e00-\u9fa5_a-zA-Z0-9]+$/;
    return reg.test(string);
}

/**
 * 将文本转义以用于POST传输
 *
 * @param {String} string base64文本
 * @return {String} 转义后base64文本
 */
function stringToPost(string) {
    // 转义回车
    string = string.replace(/\n/g, "<br>");
    // 转义 +
    string = string.replace(/\+/g, "%2B");
    // 转义 &
    string = string.replace(/&/g, "%26");
    // 转义 #
    string = string.replace(/#/g, "%23");
    // 空格
    string = string.replace(/ /g, "%20");
    // 转义 /
    string = string.replace(/\//g, "%2F");
    // 转义 ？
    string = string.replace(/\?/g, "%3F");
    // 转义 =
    string = string.replace(/=/g, "%3D");
    // 转义 "
    string = string.replace(/"/g, "%22");
    return string;
}

/**
 * <br>转化为/n
 * @param {string} string 文本
 * @returns {string} 转义后文本
 */
function br2Wrap(string) {
    return string.replace(/&lt;br&gt;/g, "\n");
}

/**
 * 获取文件后缀名
 *
 * @param {String} filename 文件名(可带有路径)
 * @param {Boolean} isSpot 是否带点
 * @return {String} 后缀名
 */
function getSuffixName(filename, isSpot = true) {
    if (isSpot) {
        var start = filename.lastIndexOf(".");
    } else {
        var start = filename.lastIndexOf(".") + 1;
    }
    var end = filename.length;
    var suffixName = filename.substring(start, end);
    return suffixName;
}

/**
 * 判断文本是否是纯数字
 *
 * @param string 文本
 * @returns {boolean} 如果存在则返回true，否则返回falsem
 */
function isDigital(string) {
    var reg = /^[0-9]*$/;
    return reg.test(string);
}

/**
 * 判断是否是yyyy-MM-dd格式时间
 *
 * @param {boolean} text 是否返回匹配文本
 * @param {string} string 文本
 * @return {Array}|{boolean} 匹配的字符串数组|是否匹配到
 */
function isDate(string, text = false) {
    var reg = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/;
    if (text) {
        return reg.exec(string);
    }
    return reg.test(string);
}

/**
 * 判断字符串是否为空
 *
 * @param string
 * @returns {boolean} 布尔值 空为真
 */
function isNull(string) {
    return string == null || string === "";
}

/**
 * 判断字符串是否由中文组成
 *
 * @param string
 * @returns {boolean}
 */
function isCn(string) {
    var reg = /[\u4E00-\u9FA5]+$/;
    if (!reg.test(string)) {
        return false;
    } else {
        return true;
    }
}

export {
    isSpecialCharacters,
    stringToPost,
    getSuffixName,
    isDigital,
    isDate,
    br2Wrap,
    isNull,
    isCn
}