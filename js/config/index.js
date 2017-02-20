var curProtocol = location.protocol.split(':')[0];

module.exports = {
	SITE_URL: {
		API: curProtocol + '://mapi.9086.cn/api',
		INVESTMENT: curProtocol + '://adviser.9086.cn/api',
		ATTACHMENT: curProtocol + '://box.9086.cn/api',
		PUSHER: {
			SAFETY_KEY: '9104cfcb1e8e4d7b',
			HOST: 'wss://pusher.9086.cn',
			PORT: 443,
			AUTH_CHANNEL: '/weblive/topic/auth',
			AUTH_SESSION: '/session/auth'
		}
	},
	LOGIN_TYPE: {
		COOKIES: 0,
		ACCESS_TOKEN: 1
	},
	PHONE_CODE_TYPE: {
		REGISTER: 1,
		OPERAT: 2,
		ALTER_PASSWORD: 3
	},
	REGEX_LIST: {
		/// 正数
		NUMBER: /^[0-9]\d*$/,
		/// 手机号码 13,14,15,17,18 打头的11纯数字
		MOBILE: /^1[3-9]\d{9}$/,
		/// 电话号码 0xx-xxxxxxxx,0xxx-xxxxxxx,0xxx-xxxxxxxx,400-xxx-xxxx,xxxxxxx,xxxxxxxx
		TELEPHONE: /^(1[23456789]\d{9}|0\d{2}-?\d{8}|0\d{3}-?\d{7}|0\d{3}-?\d{8}|400-?\d{3}-?\d{4}|0085[23]-?\d{8}|00886-?\d{8}|[2-9]\d{6,7}|[1-9]\d{4})$/,
		/// 用户名  只能输入3-20个字母、数字、下划线
		USERNAME: /^[A-Za-z0-9_]{3,20}$/,
		/// 密码  只能输入4-20个字符
		PASSWORD: /^(\w){4,20}$/,
		/// Email
		EMAIL: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		/// 网址
		URL: /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/,
		/// 中国邮政编码 中国邮政编码为6位数字
		ZIP: /^[0-9]\d{5}(?!\d)$/,
		/// 日期
		DATE: /^(([1-9][0-9]{3})[\-\/]((0?2[\-\/](0?[1-9]|[12][0-9]))|(0?[469]|11)[\-\/](0?[1-9]|[12][0-9]|30)|(0?[13578]|1[02])[\-\/](0?[1-9]|[12][0-9]|3[01])))$/,
		/// IP地址
		IPADDRESS: /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]\d?)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/,
		/// 身份证号码
		IDCARD: /^(\d{15}|\d{17}[xX]|\d{18})$/
	},
	LIMIT: {
		NONE: 0,
		FULL: -1,
		LIST: 1,
		ADD: 2,
		EDIT: 4,
		DELETE: 8
	},
	NETWORK_STATE: {
		ABORT: 0,
		ERROR: 1,
		COMPLETE: 2
	},
	SYSTEM: {
		MESSAGE: '股市有风险，投资需谨慎；主播老师观点不代表首证立场，勿轻信外部链接，谨防诈骗。',
		ANSWER: '[仅供参考，不构成投资建议]'
	},
	EMOJI: ['微笑', '大笑', '憨笑', '奸笑', '调皮',
		'心花怒放', '大哭', '愤怒', '休息一下', '抠鼻',
		'发呆', '表扬', '不好意思', '亲亲', '抓狂',
		'不会吧', '捂脸', '不明白', '凶', '再见',
		'害羞', '惊讶', '探索', '晕', '没什么了不起',
		'可怜', '鼓掌', '衰', '难过', '哼',
		'委屈', '批评', '骂人', '酷', '迟到',
		'卖萌', '挨打', '吐', '出差', '下班',
		'奋斗', '受伤', '坏笑', '鄙视', '拥抱',
		'加班', '爱心', '心碎', '礼物', '咖啡',
		'太棒了', 'OK', '握手', '过来一下', 'NO',
		'YES', '晚安', '太阳', '生日蛋糕', '鲜花'],
	LOCALES: require('./locales'),
	PRODUCTTYPE: {
		0: '投顾',
		1: '行情',
		2: '锦囊',
		3: '课堂',
		4: '首证投资易',
		5: '海纳股票通'
	},
	ORDERSTATUS: {
		1: '已支付',
		2: '待支付',
		3: '已开通',
		4: '作废'
	},
	MESSAGE_BUTTON: {
		OK: 0,
		OKCANCEL: 1,
		EXIT: 2
	}
};
$.extend(module.exports.SITE_URL, window.config);