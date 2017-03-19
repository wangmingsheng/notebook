/*
 1：
 在 ECMAScript 中，变量可以存在两种类型的值，即原始值和引用值。
 原始值存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
 引用值存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。
 2：
 函数和变量提升：
 变量提升只是声明提升，赋值只会运行时才有效；
 函数提升，定义也会提升且js引擎会先对函数变量先赋值。
 example:
  var a = 2;
  function a(){}
  console.log(a) // 2; 为什么呢，不是a为function吗？其实这是js引擎优先对函数赋值的结果。
 3：
 精度丢失问题： 这是十进制转二进制没有办法用有限的位数表示导致的，其实c#，java也会有这个问题，只是编译器
 内部做了优化处理了。
 4：
 Aop又叫面向切面编程，用过spring的同学肯定对它非常熟悉，而在js中，AOP是一个被严重忽视的技术点，这篇就通
 过下面这几个小例子，来说说AOP在js中的妙用.
 1, 防止window.onload被二次覆盖.
 2，无侵入的统计代码.
 3, 分离表单请求和校验.
 4，给ajax请求动态添加参数.
 5，职责链模式.
 6, 组合代替继承.
 先给出before和after这2个“切面”函数. 顾名思义，就是让一个函数在另一个函数之前或者之后执行，巧妙的是，before
 或者after都可以和当前的函数公用this和arguments, 这样一来供我们发挥的地方就多着了.
 example:

 */

// 4: example
Function.prototype.after = function (func) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        if (!ret) return false;
        return func.apply(this, arguments);
    }
};

Function.prototype.before = function (func) {
    var _self = this;
    return function () {
        if (!func.apply(this, arguments)) return false;
        return  _self.apply(this, arguments);
    }
};
var validataRules = {
    notEmpty: function(value) {
        return value.length > 0;
    },
    maxLength: function (value) {
        return value.length < 7;
    }
};
var validata = function () {
    for(var i in validataRules) {
        if (validataRules[i].apply(this, arguments) == false) return false;
    }
};
var send = function (value) {
    form.send(value);
};
send = send.before(validata);
send([1,2,3,4,5]);