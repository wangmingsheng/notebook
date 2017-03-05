/**
 * Created by Administrator on 2016-04-08.
 */
/*图片点击是执行函数*/
function picClick(myUrl){
    window.open(myUrl);
}

var myDom=document.getElementById("myImg");
myDom.onclick=picClick("http://www.webfoss.com");