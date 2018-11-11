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

    //1.获取按钮元素
    var send = $("send");
    var timer = null;
    var times = 5;
    send.onclick = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        this.disabled = true;
        timer = setInterval(function () {
            times--;
            this.value = times + "秒后重试";
            if (times <= 0) {

                this.value = "重新发送验证码";
                this.disabled = false;
                times = 5;
                clearTimeout(timer);

            }

        }.bind(this), 1000);
    }
}
 