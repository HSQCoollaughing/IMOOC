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

    //记录当前高亮的页签的索引
    var index = 0;
    var timer = null;

    //获取所需要的元素
    var titleList = $("notice-tit").getElementsByTagName("li");
    var divList = $("notice-con").getElementsByTagName("div");


    //为页签添加鼠标滑过事件
    for(var i=0;i<titleList.length;i++){
        titleList[i].index = i;
        titleList[i].onmouseover = function () {
            //停掉定时器
            if(timer){
                clearInterval(timer);
            }
            changeOption(this.index);
        };

        titleList[i].onmouseout = function () {

            timer = setInterval(autoPlay, 2000);
        }
    }

    //如果存在定时器需要先清除
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    //添加定时器每过2s执行一次切换
    timer = setInterval(autoPlay, 2000);



    function autoPlay() {
        index++;
        //判断index是否达到界限
        if (index > 4) {
            index = 0;
        }
        changeOption(index);

    }

    function changeOption(currentIndex) {
        index = currentIndex;
        console.log(index);
        for (var j = 0; j < titleList.length; j++) {
            titleList[j].className = "";
            divList[j].className = "mod";
        }

        //index索引的页签高亮显示，对应的内容显示
        titleList[currentIndex].className = "select";
        divList[currentIndex].className = "mod show";
    }


}
 