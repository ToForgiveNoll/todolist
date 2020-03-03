/**
 * 这个文档用于处理AJAX操作
 *
 * 创建时间：2020-03-03
 */
import {getCookie} from "./cookies";
import {ajax} from "./ajax";

/**
 * 验证keyChain
 *
 * @param fun 回调函数
 */
function keyChain(fun) {
    let keyChain = getCookie("keyChain");
    if (keyChain != null && keyChain !== "") {
        // 发送请求
        let json = {};
        json["className"] = "com.Alan.todolist.LogAndReg";
        json["methodName"] = "verificationKeyChain";
        json["keyChain"] = keyChain;
        ajax(fun, "data=" + JSON.stringify(json));
    }
}

export {
    keyChain
}