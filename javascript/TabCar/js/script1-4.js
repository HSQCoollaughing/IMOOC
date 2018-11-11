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

    //1.获取鼠标滑过或者点击需要改变的标签或者内容
    var titles = $("notice-tit").getElementsByTagName("li");
    var divs = $("notice-con").getElementsByTagName("div");

    //2.判断标签和内容的个数是否匹配
    if (titles.length != divs.length) {
        return false;
    }
    
    //3.3 鼠标滑过标签事件处理函数
    function mouseoverHandle() {

        //3.3.1 设置所有的标签不高亮显示
        for(var j=0;j<titles.length;j++){
            titles[j].className="";
        }
        //3.3.2 设置当前标签高亮显示
        this.className="select";

        //3.3.3 设置所有内容不显示
        for(var j=0;j<divs.length;j++){
            divs[j].className="mod";
        }
        //3.3.4设置当前标签对应的内容项显示
        divs[this.index].className = "mod show";
    }
    
    
    
    //3.循环遍历title,为标签注册鼠标进入或者点击事件
    for (var i = 0; i < titles.length; i++) {
        //3.1记录当前titles的下标方便之后寻找对应的内容div
        titles[i].index = i;
        //3.2 注册事件
        titles[i].onmouseover = mouseoverHandle;
    }

}
 