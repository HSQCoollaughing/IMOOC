/**
 * Created by wuyaru
 * Author: wuyaru
 * Date: 2018/11/11
 * Time: 9:28
 */


/**
 * 获取对应id的DOM元素
 * @param id  元素ID名字
 * @returns {Element} 匹配到的元素
 */
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : id;
}

//页面加载完毕
window.onload = function () {


}
 