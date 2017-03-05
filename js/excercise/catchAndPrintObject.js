/**
 * Created by Administrator on 2016-06-05.
 */
/*    function abc(i){
 alert(i);
 }
 window.onload=(function(){
 var myBody=document.getElementsByTagName("body");
 myBody.appendChild('<div onclick="abc(456)">hahah</div>');
 });
 alert(localStorage.abc);
 localStorage.removeItem("abc");*/


//全局监听
window.addEventListener("load",function(){
    alert("1111");
    a={};
    a.b();
    alert("222");
},false);
window.addEventListener("error",function(ev){
    alert(console.dir(ev));
},false);


/**
 * 打印对象
 *
 * @param obj
 * @returns {string}
 */
function writeObj(obj){
    var description = "";
    for(var i in obj){
        var property=obj[i];
        description+=i+" = "+property+"\n";
    }
    return description;
}

/**
 *类型转换成字符串
 * 目前有问题 需改进
 * @param o
 * @returns {*}
 */
function obj2string(o){
    var r=[];
    if(typeof o=="string"){
        return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";
    }
    if(typeof o=="object" && o){
        if(!o.sort){
            for(var i in o){
                r.push(i+":"+obj2string(o[i]));
            }
            if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){
                r.push("toString:"+o.toString.toString());
            }
            r="{"+r.join()+"}";
        }else{
            for(var i=0;i<o.length;i++){
                r.push(obj2string(o[i]))
            }
            r="["+r.join()+"]";
        }
        return r;
    }
    return o? o.toString():"";
}