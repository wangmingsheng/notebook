
module.exports = {
    /// 正则表达式列表
    RegexList: {
        /// 正数
        number: /^[0-9]\d*$/,
        /// 手机号码 13,14,15,17,18 打头的11纯数字
        mobile: /^1[3-9]\d{9}$/,
        /// 电话号码 0xx-xxxxxxxx,0xxx-xxxxxxx,0xxx-xxxxxxxx,400-xxx-xxxx,xxxxxxx,xxxxxxxx
        telephone: /^(1[23456789]\d{9}|0\d{2}-?\d{8}|0\d{3}-?\d{7}|0\d{3}-?\d{8}|400-?\d{3}-?\d{4}|0085[23]-?\d{8}|00886-?\d{8}|[2-9]\d{6,7}|[1-9]\d{4})$/,
        /// 用户名  只能输入3-20个字母、数字、下划线
        username: /^[A-Za-z0-9_]{3,20}$/,
        /// 密码  只能输入4-20个字符
        password: /^(\w){4,20}$/,
        /// Email
        email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        /// 网址
        url: /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/,
        /// 中国邮政编码 中国邮政编码为6位数字
        zip: /^[1-9]\d{5}(?!\d)$/,
        /// 日期
        date: /^(([1-9][0-9]{3})[\-\/]((0?2[\-\/](0?[1-9]|[12][0-9]))|(0?[469]|11)[\-\/](0?[1-9]|[12][0-9]|30)|(0?[13578]|1[02])[\-\/](0?[1-9]|[12][0-9]|3[01])))$/,
        /// IP地址
        ipaddress: /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]\d?)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/,
        /// 身份证号码
        idcard: /^(\d{15}|\d{17}[xX]|\d{18})$/,
        fileExtent: /[^.]+$/
    },
    Cookies: {
        /// 获取
        get: function(key) {
            var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
            return arr ? (unescape(arr[2])) : null;
        },
        /// 设置
        set: function(key, value, expires, path, domain) {
            if (typeof expires == 'undefined') {
                expires = new Date(new Date().getTime() + 24 * 3600 * 100);
            }
            document.cookie = key + '=' + escape(value) + ((expires) ? '; expires=' + expires.toGMTString() : '') + ((path) ? '; path=' + path: '; path=/') + ((domain) ? '; domain=' + domain: '');
        },
        /// 清除
        clear: function(key) {
            var cval = this.Cookies.get(key);
            if (key != null) document.cookie = key + '=' + cval + ';expires=Fri, 02-Jan-1970 00:00:00 GMT';
        }
    },
    /**
     * 把时间搓转换为特定格式的日期字符串
     * @param datetime 到秒的时间搓
     * @param format  'YYYY|YY|MM|DD|HH|hh|mm|SS|ss|week' 其中|可以为任意字符
     * @returns {void|XML|string}
     */
    formatDate: function(datetime, format) {
        if (!format) format = 'YYYY-MM-DD HH:mm';
        if (typeof(datetime) == 'string') {
            datetime = datetime.replace(/\-/g, '/');
            datetime = new Date(datetime);
        } else if (typeof(datetime) == 'number') {
            datetime = new Date(datetime * 1000);
        } else if (!(datetime instanceof Date)) {
            datetime = new Date();
        }

        var week = ['日', '一', '二', '三', '四', '五', '六'];
        return format.replace(/YYYY|YY|MM|DD|HH|hh|mm|SS|ss|week/g, function(key) {
            switch (key) {
                case 'YYYY': return datetime.getFullYear();
                case 'YY': return (datetime.getFullYear() + '').slice(2);
                case 'MM': return datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                case 'DD': return datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
                case 'HH':
                case 'hh': return datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
                case 'mm': return datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
                case 'SS':
                case 'ss': return datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
                case 'week': return week[datetime.getDay()];
            }
        });
    },
    getNeighborDate: function(addDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + addDayCount);//获取AddDayCount天后的日期
        return this.formatDate(dd, 'YYYY-MM-DD');
    },
    // 日期显示
    showDate: function(datetime, showTime) {
        if (datetime <= 0) return null;
        var now = new Date();
        var nowDayOfWeek = now.getDay(); // 今天本周的第几天
        var nowDay = now.getDate(); // 当前日
        var nowMonth = now.getMonth(); // 当前月
        var nowYear = now.getFullYear(); // 当前年
        var date = new Date(datetime * 1000);
        var compareTimes = this.iniDateTime(date);
        var compareYear = date.getFullYear();
        var nowDayTimes = this.iniDateTime(now);

        if (compareTimes == nowDayTimes) {
            if (showTime) return this.formatDate(datetime, 'HH:mm');
            return '今天';
        }

        now.setDate(now.getDate() + 1);
        var tomorrowTimes = now.getTime();

        if (compareTimes == tomorrowTimes) {
            if (showTime) return '明天' + '\t' + this.formatDate(datetime, 'HH:mm');
            return '明天';
        }
        now.setDate(now.getDate() - 2);
        var yesterdayTimes = now.getTime();

        if (compareTimes == yesterdayTimes) {
            if (showTime) return '昨天' + '\t' + this.formatDate(datetime, 'HH:mm');
            return '昨天';
        }

        var weekStartDateTimes = (new Date(nowYear, nowMonth, nowDay - nowDayOfWeek)).getTime();
        var weekEndDateTimes = (new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek))).getTime();

        if (weekStartDateTimes < compareTimes && compareTimes < weekEndDateTimes) {
            if (showTime) return '本周' + this.formatDate(datetime, 'week') + "\t" + this.formatDate(datetime, 'HH:mm');
            return '本周' + this.formatDate(datetime, 'week');
        }
        if (compareYear == nowYear) {
            if (showTime) return this.formatDate(datetime, 'MM月DD日') + "\t" + this.formatDate(datetime, 'HH:mm');
            return this.formatDate(datetime, 'MM月DD日');
        }
        if (showTime) return this.formatDate(datetime, 'YYYY年MM月DD日 HH:mm');
        return this.formatDate(datetime, 'YYYY年MM月DD日');
    },
    iniDateTime: function(today) {
        if (!(today instanceof Date)) today = new Date();
        return today.setHours(0, 0, 0, 0);
    },
    dataReplace: function(str, data) {
        return str.replace(/{([^}]+)}/g, function(item, $1) {
            if (data[$1]) return data[$1];
            return item
        });
    },
    getFileExt: function(filename) {
        if (filename.length > 0) {
            var files = filename.split('.');
            if (files.length > 0) return files[files.length - 1].toLowerCase();
        }
        return;
    },
    formatBytes: function(bytes) {
        if (bytes <= 0) return '0KB';
        var s = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var e = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + s[e];
    },
    formatCoin: function (number, decimal) {
        if (!decimal && decimal != 0) decimal = 2;
        //if (!window.Taro.Utils.RegexList['floatX'].test(number)) number = 0;
        var _negative = number < 0 ? '-' : '';
        var _number = parseInt(number = Math.abs(+number || 0).toFixed(decimal), 10) + '';
        var _length = (_length = _number.length) > 3 ? _length % 3 : 0;
        return _negative + (_length ? _number.substr(0, _length) + ',' : '') + _number.substr(_length).replace(/(\d{3})(?=\d)/g, "$1" + ',') + (decimal ? '.' + Math.abs(number - _number).toFixed(decimal).slice(2) : '');
    },
    parseInt: function(str) {
        var value = 0;
        if (str) {
            value = parseInt(str);
        }
        return value;
    },
    parseFloat: function(str) {
        var value = 0;
        if (str) {
            value = parseFloat(str);
        }
        return value;
    },
    md5: require('./md5'),
    now: function() {
        return parseInt((new Date()).getTime() / 1000);
    },
    lock: function(flag) {
        Config.locked = flag;
    },
    //URL
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    },
    //密码
    pwStrength: function(password) {
        var _strength = 0;
        var _value = password;
        if (_value && _value.length >= 3) {
            _strength = 1;
            if (_value.length >= 10) _strength++;
            if (_value.match(new RegExp('[A-Z]'))) _strength++;
            if (_value.match(new RegExp('[a-z]'))) _strength++;
            if (_value.match(new RegExp('[0-9]'))) _strength++;
            if (_value.match(new RegExp('([!,%,&,@,#,$,^,*,?,_,~])'))) {
                _strength++;
                if (_strength == 5) _strength = 6;
            }
            _strength = Math.floor(_strength / 2);
        }
        return _strength;
    },
    //关于滚动条
    isScrollBottom: function(domNode, offset) {
        if (!$.isNumeric(offset)) offset = 10;
        return domNode.scrollTop + domNode.offsetHeight >= domNode.scrollHeight - offset;
    },
    scrollBottom: function(domNode) {
        $(domNode).scrollTop(domNode.scrollHeight);
    },
    isScrollTop: function(domNode, offset) {
        if (!$.isNumeric(offset)) offset = 10;
        return domNode.scrollTop <= offset;
    },
    scrollTop: function(domNode) {
        $(domNode).scrollTop(0);
    },
    keepCurrentPosition: function(currentDom, fartherBox) {
        //这里还可以优化的
        $(fartherBox).scrollTop($(currentDom).offset().top);
    },
    //文件
    getBase64: function(file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            typeof (callback) == 'function' && callback(e.currentTarget.result);
        };
    }
};