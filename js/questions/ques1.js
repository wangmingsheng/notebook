
/*
1. new
new func(); 当func return 基础数据类型时，new func()将执行func 并返回func中的this对象;
否则返回func return中的对象。

2.自己实现一个bing方法
 Function.prototype.bind = function myBind() {
     var object = arguments[0], otherArg = [].slice.call(arguments, 1);
     object.fn = this;
     return function() {
          var args = [].slice.apply(arguments);
         object.fn(...otherArg.concat(args));
         delete object.fn;
     }
 }
* */