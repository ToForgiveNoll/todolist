/**
 * 这个文档用于处理AJAX操作
 *
 * 创建时间：2019-10-15
 */

/**
 * 处理ajax
 *
 * @param {String} url 请求网址
 * @param {Function} fun 回调函数
 * @param {String} post post传值
 * @return {String} 调用回调函数传回后端数据
 * @author Alan
 * @email 122417203@qq.com
 */
function ajax(fun, post = "",url="http://localhost:8080/ToDoList_war_exploded/") {
    var xmlhttp;

    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && fun != null) {
            fun(xmlhttp.responseText);
        }
    };

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(post);
}

export {
    ajax
}