/**
 * Created by Administrator on 2016-06-04.
 */
/**
 * Created by Administrator on 2016-06-04.
 */



/* 定义模板函数 */
var template = function (queryArr) {
    var count = 0;
    for (var i = 0; i < queryArr.length; i++) {
        var e = queryArr[i];
        if ($express) {
            count++;
        }
    }
    return count;
};

/*模板创建函数 */
var createIntance = function (exp) {
    var fun = template.toString().replace("$express", exp).toString();
    return eval("0," + fun);
};

var testTodo = function () {
    var testArr = [
        { name: "张三", age: 20 },
        { name: "李四", age: 25 },
        { name: "王二麻子", age: 28 },
        { name: "小张", age: 30 }
    ];
    var func = createIntance("e.age>=25");
    alert(func(testArr));
};

/****************** JS 实现 JSON查询 **********************/
// 定义常用的函数
var len = function (s) { return s.length; }
var left = function (s, n) { return s.substr(0, n); }
var right = function (s, n) { return s.substr(-n); }
var index = function (s, find) { return s.indexOf(find) + 1; }

// 扩展原型方法
var _proto = Object.prototype;
// 缓存,解决快速查找
var _cache = {};
// 扩展运算符
var _alias = [
    /@/g, "_e.",
    /AND/gi, "&&",
    /OR/gi, "||",
    /<>/g, "!=",
    /NOT/gi, "!",
    /([^=<>])=([^=]|$)/g, '$1==$2'
];

var _rQuote = /""/g;
var _rQuoteTemp = /!~/g;

// 编译
var _complite = function (code) {
    return eval("0," + code);
};

// 将扩展符号转换成标准的JS符号
var _interpret = function (exp) {
    exp = exp.replace(_rQuote,"!~");
    var arr = exp.split('"');
    var i, n = arr.length;
    var k = _alias.length;

    for (var i = 0; i < n; i += 2) {
        var s = arr[i];
        for (var j = 0; j < k; j += 2) {
            if (index(s, _alias[j]) > -1) {
                s = s.replace(_alias[j], _alias[j + 1]);
            }
        }
        arr[i] = s;
    }

    for (var i = 1; i < n; i += 2) {
        arr[i] = arr[i].replace(_rQuoteTemp, '\\"');
    }
    return arr.join('"');
};

// 定义模函数
var _templ = function (_list) {
    var _ret = [];
    var _i = -1;

    for (var _k in _list) {
        var _e = _list[_k];
        if (_e != _proto[_k]) {
            if ($C) {
                _ret[++_i] = _e;
            }
        }
    }
    return _ret;
} .toString();

// 扩展查询的方法
_proto.Query = function (exp) {
    if (!exp) {
        return [];
    }
    var fn = _cache[exp];
    try {
        if (!fn) {
            var code = _interpret(exp);
            code = _templ.replace("$C", code);
            fn = _cache[exp] = _complite(code);
        }
        return fn(this);
    } catch (e) {
        return [];
    }
};

var doTest = function () {
    var heros = [
        // 名============攻=====防=======力量====敏捷=====智力====
        {name: '冰室女巫', DP: 38, AP: 1.3, Str: 16, Dex: 16, Int: 21 },
        { name: '沉默术士', DP: 39, AP: 1.1, Str: 17, Dex: 16, Int: 21 },
        { name: '娜迦海妖', DP: 51, AP: 6.0, Str: 21, Dex: 21, Int: 18 },
        { name: '赏金猎人', DP: 39, AP: 4.0, Str: 17, Dex: 21, Int: 16 },
        { name: '剧毒术士', DP: 45, AP: 3.1, Str: 18, Dex: 22, Int: 15 },
        { name: '光之守卫', DP: 38, AP: 1.1, Str: 16, Dex: 15, Int: 22 },
        { name: '炼金术士', DP: 49, AP: 0.6, Str: 25, Dex: 11, Int: 25 }
        //...
    ];
    var match = heros.Query('@Str>20 AND @Dex>20');
    ShowResult(match[0]);
    // 查询：“士”结尾的
    // 结果：沉默术士,剧毒术士,炼金术士
    var match = heros.Query('right(@name,1)="士"');
    ShowResult(match[0]);
};
function ShowResult(result) {
    alert(result.name + " " + result.DP + " " + result.AP + " " + result.Str + " " + result.Dex + " " + result.Int);
}