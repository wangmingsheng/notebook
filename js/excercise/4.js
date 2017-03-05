
//创建div
function _creatediv(item,classname){
    var _div = document.createElement('div');
    if(classname) _div.className = classname;
    if(item) item.appendChild(_div);
    return _div;
};
//创建弹出层
function _createpop(item,type){

    //初始化弹出层属性
    var _item = {
        'title':item.title||"提示",
        'content':item.content||(typeof item ==="string"?item:''),
        'btnconfirmtxt':item.btnconfirmtxt||"确定",
        'btncanceltxt':item.btncanceltxt||"取消",
        'btnconfirmfn':item.btnconfirmfn||"",
        'btncancelfn':item.btncancelfn||""
    };
    var _div = [];
    //根据属性添加创建弹出框所显示的内容
    _div[0] =  _creatediv(document.body,"t-alert-fixed");
    //添加背景遮罩层
    _creatediv(_div[0],"t-alert-fixed t-alert-bg");
    if(type==='confirm'||type==='alert'||type==='myAlert'){
        //创建弹出框框体
        if(type=='myAlert'){
            _div[1] = _creatediv(_creatediv(_div[0],"t-alert-fixed"),"t-alert-body2");
        }else{
            _div[1] = _creatediv(_creatediv(_div[0],"t-alert-fixed"),"t-alert-body");
        }

        //创建弹出框标题
        _creatediv(_div[1],"t-alert-title").innerHTML = _item.title;
        //创建弹出框内容描述
        _creatediv(_div[1],"t-alert-content").innerHTML = _item.content;
        //创建弹出框底部按钮
        _div[2] = _creatediv(_div[1],"box-display t-alert-footer");
        if(type === 'confirm')  _unloaddiv(_creatediv(_div[2],"t-alert-btn box-flex"),_item.btncanceltxt,_item.btncancelfn,_div[0],_div[1],'t-animat-out');
        _unloaddiv(_creatediv(_div[2],"t-alert-btn box-flex"),_item.btnconfirmtxt,_item.btnconfirmfn,_div[0],_div[1],'t-animat-out');
        _addAnimation(_div[1],'t-animat-in');
    }else if(type === 'popbottom'){
        _div[1] = _creatediv(_creatediv(_creatediv(_div[0],"t-alert-fixed"),"t-popbottom-body"),"t-popbottom-content");
        var _listitem = item.btnarr;
        //创建底部弹出按钮列表
        if(!!_listitem){
            for(i=0;i<_listitem.length;i++){
                //绑定卸载事件
                _unloaddiv(_creatediv(_div[1],"t-popbottom-btn"),_listitem[i].txt,_listitem[i].fn,_div[0],_div[1],'t-animat-down')
            };
        };
        _unloaddiv(_creatediv(_div[1],"t-popbottom-btn t-popbottom-cancelbtn"),_item.btncanceltxt,_item.btncancelfn,_div[0],_div[1],'t-animat-down');
        _addAnimation(_div[1],'t-animat-up');
    };
};
//卸载弹出框
function _unloaddiv(_thisdiv,btntxt,btnfn,_maindiv,_bodydiv,animationName){
    _thisdiv.innerHTML = btntxt;
    waystr = _thisdiv.click?'click':'touchend';
    _thisdiv.addEventListener(waystr,function(){
        if(btnfn) btnfn();
        //if(G$.navigator.getBrowserType() === "Webkit") {
        _addAnimation(_bodydiv, animationName, function () {
            document.body.removeChild(_maindiv);
        });
        // }else{
        //document.body.removeChild(_maindiv);
        //};
    });
};
//动画
var animationitem = [];
//添加动画效果
function _addAnimation(item,className,fn){

    animationitem.push({
        'item':item,
        'className':className,
        'fn':fn
    });
    // if(G$.navigator.getBrowserType() === "Webkit"){
    item.className += ' ' + className;
    item.addEventListener("webkitAnimationEnd",_unloadAnimation);
    // }else{
    //    _unloadAnimation();
    // };
};
//卸载动画效果
function _unloadAnimation(){
    var myanimationitems = animationitem[animationitem.length - 1];

    for(var i =0 ;i<animationitem.length;i++){
        animationitem[i].item.className =  animationitem[i].item.className.replace( animationitem[i].className, '');
    }

    if( myanimationitems.fn){
        myanimationitems.fn();
    }
    myanimationitems.item.removeEventListener("webkitAnimationEnd", _unloadAnimation);
    animationitem.pop();
};


_createpop("你好","alert");

window.alert("中国")


