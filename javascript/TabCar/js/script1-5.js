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

    // 将所有点击的标题和要显示隐藏的列表取出来
    var plist = $("menu").getElementsByTagName("p");
    var ullist = $("menu").getElementsByTagName("ul");


    if(plist.length!=ullist.length){
        return false;
    }

    // 遍历所有要点击的标题且给它们添加索引及绑定事件
    for(var i=0;i<plist.length;i++){
        plist[i].index = i;
        plist[i].onclick = function () {

            for(var j=0;j<ullist.length;j++){
                ullist[j].className="";
            }
            ullist[this.index].className = "show";
        }
    }

}
 