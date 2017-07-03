/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _RestBase = __webpack_require__(40);

var _RestBase2 = _interopRequireDefault(_RestBase);

var _banner = __webpack_require__(42);

var _banner2 = _interopRequireDefault(_banner);

var _classify = __webpack_require__(43);

var _classify2 = _interopRequireDefault(_classify);

var _goods = __webpack_require__(44);

var _goods2 = _interopRequireDefault(_goods);

var _cart = __webpack_require__(45);

var _cart2 = _interopRequireDefault(_cart);

var _address = __webpack_require__(46);

var _address2 = _interopRequireDefault(_address);

var _order = __webpack_require__(47);

var _order2 = _interopRequireDefault(_order);

var _help = __webpack_require__(48);

var _help2 = _interopRequireDefault(_help);

var _user = __webpack_require__(49);

var _user2 = _interopRequireDefault(_user);

var _upload = __webpack_require__(50);

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	banner: new _RestBase2.default(_banner2.default),
	classify: new _RestBase2.default(_classify2.default),
	goods: new _RestBase2.default(_goods2.default),
	cart: new _RestBase2.default(_cart2.default),
	address: new _RestBase2.default(_address2.default),
	order: new _RestBase2.default(_order2.default),
	help: new _RestBase2.default(_help2.default),
	user: _user2.default,
	upload: _upload2.default
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	secret: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	mongo: {
		development: {
			connectionString: 'mongodb://127.0.0.1:27017/mall'
		},
		production: {
			connectionString: 'mongodb://127.0.0.1:27017/mall'
		}
	},
	redis: {
		development: {
			connectionString: 'redis://127.0.0.1:6379'
		},
		production: {
			connectionString: 'redis://127.0.0.1:6379'
		}
	},
	upload: {
		tmp: 'public/tmp/',
		path: 'public/uploads/'
	},
	superAdmin: {
		username: 'admin',
		password: '123456'
	},
	orderStatus: {
		'submitted': '已提交',
		'canceled': '已取消',
		'confirmed': '已确认',
		'finished': '已完成'
	},
	wechat: {
		appid: 'wx4ec54c44008298ec',
		secret: '8295e6dd753aab17624e0bb0e1c4e98d'
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsonwebtoken = __webpack_require__(33);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _crypto = __webpack_require__(8);

var _crypto2 = _interopRequireDefault(_crypto);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	TOKEN_SECRET: _config2.default.secret,
	setToken: function setToken(id) {
		return _jsonwebtoken2.default.sign({
			id: id
		}, this.TOKEN_SECRET, {
			expiresIn: 60 * 60
		});
	},
	setMd5: function setMd5(value) {
		return _crypto2.default.createHash('md5').update(value).digest('hex');
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redis = __webpack_require__(34);

var _redis2 = _interopRequireDefault(_redis);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Middlewares = function () {
	function Middlewares() {
		_classCallCheck(this, Middlewares);

		this.redisClient = _redis2.default.redisClient;
		this.TOKEN_EXPIRATION = 60;
		this.TOKEN_EXPIRATION_SEC = this.TOKEN_EXPIRATION * 60;
	}

	/**
  * get token        
  */


	_createClass(Middlewares, [{
		key: 'getToken',
		value: function getToken(headers) {
			if (headers && headers.authorization) {
				var authorization = headers.authorization;
				var part = authorization.split(' ');

				if (part.length == 2) {
					return part[1];
				}
			}

			return null;
		}

		/**
   * Middleware for token verification       
   */

	}, {
		key: 'verifyToken',
		value: function verifyToken(req, res, next) {
			var token = this.getToken(req.headers);

			this.redisClient.get(token, function (err, reply) {
				if (err) return res.tools.setJson(500, '服务器错误');
				if (reply) return res.tools.setJson(401, '无权访问');

				_user2.default.findByIdAsync(req.user.id).then(function (doc) {
					if (!doc) return res.tools.setJson(1, '用户不存在');
					Object.assign(req.user, {
						_id: doc._id,
						username: doc.username,
						avatar: doc.avatar
					});
					return next();
				}).catch(function (err) {
					return next(err);
				});
			});
		}

		/**
   * redis set key
   */

	}, {
		key: 'expireToken',
		value: function expireToken(headers) {
			var token = this.getToken(headers);

			if (token != null) {
				this.redisClient.set(token, true);
				this.redisClient.expire(token, this.TOKEN_EXPIRATION_SEC);
			}
		}
	}]);

	return Middlewares;
}();

exports.default = Middlewares;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _crypto = __webpack_require__(8);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_LOGIN_ATTEMPTS = 5;
var LOCK_TIME = 2 * 60 * 60 * 1000;

var Schema = _mongoose2.default.Schema({
    username: String,
    password: String,
    avatar: String,
    tel: Number,
    email: String,
    nickname: String,
    gender: String,
    birthday: Date,
    loginAttempts: {
        type: Number,
        required: true,
        default: 0
    },
    lockUntil: {
        type: Number
    },
    create_at: {
        type: Date,
        default: Date.now()
    },
    update_at: Date
});

var reasons = Schema.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};

Schema.virtual('isLocked').get(function () {
    return !!(this.lockUntil && this.lockUntil > Date.now());
});

Schema.methods.comparePassword = function (candidatePassword) {
    return _crypto2.default.createHash('md5').update(candidatePassword).digest('hex') === this.password;
};

Schema.methods.incLoginAttempts = function () {
    // if we have a previous lock that has expired, restart at 1
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.updateAsync({
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 }
        });
    }
    // otherwise we're incrementing
    var updates = { $inc: { loginAttempts: 1 }
        // lock the account if we've reached max attempts and it's not locked already
    };if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = { lockUntil: Date.now() + LOCK_TIME };
    }
    return this.updateAsync(updates);
};

Schema.statics.getAuthenticated = function (username, password) {
    return this.findOneAsync({ username: username }).then(function (doc) {
        // make sure the user exists
        if (!doc) {
            return reasons.NOT_FOUND;
        }
        // check if the account is currently locked
        if (doc.isLocked) {
            return doc.incLoginAttempts().then(function () {
                return reasons.MAX_ATTEMPTS;
            });
        }
        // test for a matching password
        if (doc.comparePassword(password)) {
            // if there's no lock or failed attempts, just return the doc
            if (!doc.loginAttempts && !doc.lockUntil) return doc;
            // reset attempts and lock info
            var updates = {
                $set: { loginAttempts: 0 },
                $unset: { lockUntil: 1 }
            };
            return doc.updateAsync(updates).then(function () {
                return doc;
            });
        }
        // password is incorrect, so increment login attempts before responding
        return doc.incLoginAttempts().then(function () {
            return reasons.PASSWORD_INCORRECT;
        });
    });
};

exports.default = _mongoose2.default.model('user', Schema);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(15);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.set('port', process.env.PORT || 3000); // #!/usr/bin/env node

var port = _app2.default.get('port');
var server = _app2.default.listen(port, function () {
    console.log('------ Express server listening on port ' + server.address().port + ' ------');
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = __webpack_require__(17);

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = __webpack_require__(18);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _log4js = __webpack_require__(5);

var _log4js2 = _interopRequireDefault(_log4js);

var _bodyParser = __webpack_require__(19);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(20);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressSession = __webpack_require__(21);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cors = __webpack_require__(22);

var _cors2 = _interopRequireDefault(_cors);

var _connect = __webpack_require__(23);

var _connect2 = _interopRequireDefault(_connect);

var _expressJwt = __webpack_require__(24);

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _sessionMongoose = __webpack_require__(25);

var _sessionMongoose2 = _interopRequireDefault(_sessionMongoose);

var _mongo = __webpack_require__(26);

var _mongo2 = _interopRequireDefault(_mongo);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _mkdirs = __webpack_require__(28);

var _mkdirs2 = _interopRequireDefault(_mkdirs);

var _logger = __webpack_require__(29);

var _logger2 = _interopRequireDefault(_logger);

var _tools = __webpack_require__(30);

var _tools2 = _interopRequireDefault(_tools);

var _jwtauth = __webpack_require__(9);

var _jwtauth2 = _interopRequireDefault(_jwtauth);

var _routes = __webpack_require__(36);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var mkdirsSync = _mkdirs2.default.mkdirsSync;
var SessionStore = (0, _sessionMongoose2.default)(_connect2.default);
var mongodb = new _mongo2.default(app, _config2.default);
var store = new SessionStore({ url: mongodb.dblink });
var auth = new _jwtauth2.default();

// 判断文件夹是否存在, 若不存在则创建之
mkdirsSync(_config2.default.upload.tmp);
mkdirsSync(_config2.default.upload.path);

// view engine setup
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', (0, _expressHandlebars2.default)({
    layoutsDir: _path2.default.join(__dirname, 'views/layouts/'),
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        time: Date.now,
        body: '123456789'
    }
}));

app.use((0, _serveFavicon2.default)(__dirname + '/public/favicon.ico'));
app.use(_log4js2.default.connectLogger((0, _logger2.default)('normal'), { level: 'auto', format: ':method :url :status' }));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use((0, _cookieParser2.default)(_config2.default.secret));

// set session.
app.use((0, _expressSession2.default)({
    store: store,
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: true,
    secret: _config2.default.secret
}));

app.use((0, _cors2.default)());

app.use(function (req, res, next) {
    if (req.path.indexOf('/api') === -1) {
        return res.render('index');
    }
    return next();
});

// index
// app.get('/', (req, res) => {
// 	res.render('index')
// })

// custom middleware
app.use(/\/api/, _tools2.default);
app.use(/^((?!sign\/up|sign\/in|captcha).)+$/, [(0, _expressJwt2.default)({ secret: _config2.default.secret }), auth.verifyToken.bind(auth)]);

// 加载路由
(0, _routes2.default)(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    // res.status(404)
    // res.send('Not Found')
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            layout: false,
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        layout: false,
        message: err.message,
        error: err
    });
});

// app.listen(3000, '0.0.0.0')

exports.default = app;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("connect");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("session-mongoose");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoomise = __webpack_require__(27);

var _mongoomise2 = _interopRequireDefault(_mongoomise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mongo = function () {
	function Mongo(app, config) {
		_classCallCheck(this, Mongo);

		Object.assign(this, {
			app: app,
			config: config
		});

		this.init();
	}

	_createClass(Mongo, [{
		key: 'init',
		value: function init() {
			this.env = this.app.get('env');
			this.dblink = this.config['mongo'][this.env]['connectionString'];

			var opts = {
				server: {
					socketOptions: {
						keepAlive: 1
					}
				}
			};

			_mongoose2.default.connect(this.dblink, opts).connection.on('error', function (err) {
				return console.log('------ Mongodb connection failed ------' + err);
			}).on('open', function () {
				return console.log('------ Mongodb connection succeed ------');
			});

			_mongoomise2.default.promisifyAll(_mongoose2.default, _bluebird2.default);
		}
	}]);

	return Mongo;
}();

exports.default = Mongo;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("mongoomise");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = __webpack_require__(6);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建多层文件夹 同步
function mkdirsSync(dirpath, mode) {
    if (!_fs2.default.existsSync(dirpath)) {
        var pathtmp = void 0;
        dirpath.split(_path2.default.sep).forEach(function (dirname) {
            if (pathtmp) {
                pathtmp = _path2.default.join(pathtmp, dirname);
            } else {
                pathtmp = dirname;
            }

            if (!_fs2.default.existsSync(pathtmp)) {
                if (!_fs2.default.mkdirSync(pathtmp, mode)) {
                    return false;
                }
            }
        });
    }
    return true;
}

// 创建多层文件夹 异步
function mkdirs(dirpath, mode, callback) {
    callback = callback || function () {};
    _fs2.default.exists(dirpath, function (exitsmain) {
        if (!exitsmain) {
            //目录不存在
            var pathtmp = void 0;
            var pathlist = dirpath.split(_path2.default.sep);
            var pathlistlength = pathlist.length;
            var pathlistlengthseed = 0;

            mkdir_auto_next(mode, pathlist, pathlist.length, function (callresult) {
                if (callresult) {
                    callback(true);
                } else {
                    callback(false);
                }
            });
        } else {
            callback(true);
        }
    });
}

// 异步文件夹创建 递归方法
function mkdir_auto_next(mode, pathlist, pathlistlength, callback, pathlistlengthseed, pathtmp) {
    callback = callback || function () {};
    if (pathlistlength > 0) {

        if (!pathlistlengthseed) {
            pathlistlengthseed = 0;
        }

        if (pathlistlengthseed >= pathlistlength) {
            callback(true);
        } else {
            if (pathtmp) {
                pathtmp = _path2.default.join(pathtmp, pathlist[pathlistlengthseed]);
            } else {
                pathtmp = pathlist[pathlistlengthseed];
            }

            _fs2.default.exists(pathtmp, function (exists) {
                if (!exists) {
                    _fs2.default.mkdir(pathtmp, mode, function (isok) {
                        if (!isok) {
                            mkdir_auto_next(mode, pathlist, pathlistlength, function (callresult) {
                                callback(callresult);
                            }, pathlistlengthseed + 1, pathtmp);
                        } else {
                            callback(false);
                        }
                    });
                } else {
                    mkdir_auto_next(mode, pathlist, pathlistlength, function (callresult) {
                        callback(callresult);
                    }, pathlistlengthseed + 1, pathtmp);
                }
            });
        }
    } else {
        callback(true);
    }
}

exports.default = {
    mkdirsSync: mkdirsSync,
    mkdirs: mkdirs
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (name) {
	var logger = _log4js2.default.getLogger(name);
	logger.setLevel('INFO');
	return logger;
};

var _log4js = __webpack_require__(5);

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure({
	appenders: [{
		type: 'console'
	}, {
		type: 'file',
		filename: 'logs/access.log',
		maxLogSize: 1024,
		backups: 4,
		category: 'normal'
	}],
	replaceConsole: true
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (req, res, next) {
	res.paginate = _paginate2.default;
	res.tools = new _tools2.default(req, res);
	res.jwt = _jwtauth2.default;
	next();
};

var _paginate = __webpack_require__(31);

var _paginate2 = _interopRequireDefault(_paginate);

var _tools = __webpack_require__(32);

var _tools2 = _interopRequireDefault(_tools);

var _jwtauth = __webpack_require__(7);

var _jwtauth2 = _interopRequireDefault(_jwtauth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paginate = function () {
	function Paginate(page, perPage, total) {
		_classCallCheck(this, Paginate);

		Object.assign(this, {
			page: page,
			perPage: perPage,
			total: total
		});
		this.init();
	}

	/**
  * init
  */


	_createClass(Paginate, [{
		key: "init",
		value: function init() {
			if (!this.page || this.page < 1) {
				this.page = 1;
			}
			if (!this.perPage || this.perPage < 1) {
				this.perPage = 10;
			}
			if (!this.total || this.total < 0) {
				this.total = 0;
			}
			if (this.total % this.perPage === 0) {
				this.pages = parseInt(this.total / this.perPage);
			} else {
				this.pages = parseInt(this.total / this.perPage) + 1;
			}
			if (this.page > this.pages) {
				this.page = this.pages;
			}
			this.item = {
				page: this.page,
				pages: this.pages,
				perPage: this.perPage,
				total: this.total,
				prev: this.prev(),
				next: this.next(),
				hasNext: this.hasNext(),
				hasPrev: this.hasPrev()
			};
		}

		/**
   * 是否有上一页
   */

	}, {
		key: "hasPrev",
		value: function hasPrev() {
			if (this.page > 1) return !0;
			return !1;
		}

		/**
   * 上一页
   */

	}, {
		key: "prev",
		value: function prev() {
			if (this.page <= 1) return 1;
			return this.page - 1;
		}

		/**
   * 是否有下一页
   */

	}, {
		key: "hasNext",
		value: function hasNext() {
			if (this.page < this.pages) return !0;
			return !1;
		}

		/**
   * 下一页
   */

	}, {
		key: "next",
		value: function next() {
			if (this.page < this.pages) return this.page + 1;
			return this.pages;
		}
	}]);

	return Paginate;
}();

exports.default = Paginate;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tools = function () {
	function Tools(req, res) {
		_classCallCheck(this, Tools);

		Object.assign(this, {
			req: req,
			res: res
		});
	}

	/**
  * API接口调用返回JSON格式内容
  * @param {Number} code    
  * @param {String} message 
  * @param {Objext} data    
  */


	_createClass(Tools, [{
		key: 'setJson',
		value: function setJson(code, message, data) {
			return this.res.json({
				meta: {
					code: code || 0,
					message: message || null
				},
				data: data || null
			});
		}

		/**
   * 返回文件后缀
   * @param  {Object} file 
   * @return {String}      
   */

	}, {
		key: 'getFilenameExt',
		value: function getFilenameExt(file) {
			var types = file.name.split('.');
			return types[types.length - 1];
		}

		/**
   * 返回指定范围内的一个整数
   * @param  {Number} min 
   * @param  {Number} max 
   * @return {String}      
   */

	}, {
		key: 'rand',
		value: function rand(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		/**
   * 生成字符串组合
   * @param  {Number} size 
   * @return {String}      
   */

	}, {
		key: 'randString',
		value: function randString(size) {
			var result = '';
			var allChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

			size = size || 1;

			while (size--) {
				result += allChar.charAt(this.rand(0, allChar.length - 1));
			}

			return result;
		}

		/**
   * 生成文件名
   * @param  {Object} file 
   * @return {String}      
   */

	}, {
		key: 'randFilename',
		value: function randFilename(file) {
			return this.randString(this.rand(10, 100)) + Date.parse(new Date()) + '.' + this.getFilenameExt(file);
		}

		/**
   * 判断某个元素是否为字符串
   * @param  {String}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isString',
		value: function isString(value) {
			return typeof value === 'string';
		}

		/**
   * 判断某个元素是否为函数
   * @param  {Function}  value 
   * @return {Boolean}     
   */

	}, {
		key: 'isFunction',
		value: function isFunction(value) {
			return this.type(value) === 'function';
		}

		/**
   * 判断某个元素是否为数组
   * @param  {Array}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isArray',
		value: function isArray(value) {
			return Array.isArray(value);
		}

		/**
   * 判断某个元素是否为对象
   * @param  {Obejct}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isObject',
		value: function isObject(value) {
			return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
		}

		/**
   * 判断某个元素是否为数值
   * @param  {Number}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isNumber',
		value: function isNumber(value) {
			return typeof value === 'number';
		}

		/**
   * 判断某个元素是否为日期
   * @param  {Date}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isDate',
		value: function isDate(value) {
			return this.type(value) === '[object Date]';
		}

		/**
   * 判断某个元素是否为正则表达式
   * @param  {RegExp}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isRegExp',
		value: function isRegExp(value) {
			return this.type(value) === '[object RegExp]';
		}

		/**
   * 判断某个元素是否为File对象
   * @param  {Object}  obj 
   * @return {Boolean}     
   */

	}, {
		key: 'isFile',
		value: function isFile(obj) {
			return this.type(obj) === '[object File]';
		}

		/**
   * 判断某个元素是否为FormData对象
   * @param  {Object}  obj 
   * @return {Boolean}     
   */

	}, {
		key: 'isFormData',
		value: function isFormData(obj) {
			return this.type(obj) === '[object FormData]';
		}

		/**
   * 判断某个元素是否为Blob对象
   * @param  {Object}  obj 
   * @return {Boolean}     
   */

	}, {
		key: 'isBlob',
		value: function isBlob(obj) {
			return this.type(obj) === '[object Blob]';
		}

		/**
   * 判断某个元素是否为布尔值
   * @param  {boolean}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isBoolean',
		value: function isBoolean(value) {
			return typeof value === 'boolean';
		}

		/**
   * 判断某个元素是否为Promise对象
   * @param  {Function}  obj 
   * @return {Boolean}     
   */

	}, {
		key: 'isPromiseLike',
		value: function isPromiseLike(obj) {
			return obj && this.isFunction(obj.then);
		}

		/**
   * 判断数组类型
   * @param  {Array}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isTypedArray',
		value: function isTypedArray(value) {
			var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;
			return value && this.isNumber(value.length) && TYPED_ARRAY_REGEXP.test(this.type(value));
		}

		/**
   * 判断某个元素是否为ArrayBuffer对象
   * @param  {Object}  obj 
   * @return {Boolean}     
   */

	}, {
		key: 'isArrayBuffer',
		value: function isArrayBuffer(obj) {
			return this.type(obj) === '[object ArrayBuffer]';
		}

		/**
   * 判断某个元素是否为defined
   * @param  {undefined}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isDefined',
		value: function isDefined(value) {
			return typeof value !== 'undefined';
		}

		/**
   * 判断某个元素是否为undefined
   * @param  {undefined}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isUndefined',
		value: function isUndefined(value) {
			return typeof value === 'undefined';
		}

		/**
   * 判断某个元素是否为null
   * @param  {Null}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isNull',
		value: function isNull(value) {
			return value === null;
		}

		/**
   * 判断某个元素是否为有限数
   * @param  {Number}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isFinite',
		value: function (_isFinite) {
			function isFinite(_x) {
				return _isFinite.apply(this, arguments);
			}

			isFinite.toString = function () {
				return _isFinite.toString();
			};

			return isFinite;
		}(function (value) {
			return typeof value == 'number' && isFinite(value);
		})

		/**
   * 判断某个元素是否为自然数
   * @param  {Number}  value 
   * @return {Boolean}       
   */

	}, {
		key: 'isNaN',
		value: function isNaN(value) {
			return this.isNumber(value) && value != +value;
		}
	}, {
		key: 'isError',
		value: function isError(value) {
			return this.type(value) === '[object Error]';
		}

		/**
   * 删除字符串左右两端的空格
   * @param  {String} str 
   * @return {String}     
   */

	}, {
		key: 'trim',
		value: function trim(str) {
			return this.isString(str) ? str.trim() : str;
		}

		/**
   * 字符串转义
   * @param  {String} str 
   * @return {String}     
   */

	}, {
		key: 'escapeForRegexp',
		value: function escapeForRegexp(str) {
			return str.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
		}

		/**
   * 字符串转对象
   * @param  {String} str 'key1,key2,...'
   * @return {Object} in the form of {key1:true, key2:true, ...}    
   */

	}, {
		key: 'makeMap',
		value: function makeMap(str) {
			var obj = {},
			    items = str.split(',');
			for (var i = 0; i < items.length; i++) {
				obj[items[i]] = !0;
			}
			return obj;
		}

		/**
   * 判断数组中是否含有指定元素
   * @param  {Array} arr 
   * @param  {Objext} obj 
   * @return {Array}     
   */

	}, {
		key: 'includes',
		value: function includes(arr, obj) {
			return Array.prototype.indexOf.call(arr, obj) != -1;
		}

		/**
   * 数组删除指定的元素，并返回元素的索引值
   * @param  {Array} array 
   * @param  {String} value 
   * @return {Number}       
   */

	}, {
		key: 'arrayRemove',
		value: function arrayRemove(array, value) {
			var index = array.indexOf(value);
			if (index >= 0) {
				array.splice(index, 1);
			}
			return index;
		}

		/**
   * 日期增加分钟
   * @param  {Date} date    
   * @param  {Number} minutes 
   * @return {Date}
   */

	}, {
		key: 'addDateMinutes',
		value: function addDateMinutes(date, minutes) {
			date = new Date(date.getTime());
			date.setMinutes(date.getMinutes() + minutes || 0);
			return date;
		}

		/**
   * 对象解析出JSON字符串
   * @param  {Object} obj    
   * @param  {Number} pretty 
   * @return {Object}        
   */

	}, {
		key: 'toJson',
		value: function toJson(obj, pretty) {
			if (this.isUndefined(obj)) return undefined;
			if (!this.isNumber(pretty)) {
				pretty = pretty ? 2 : null;
			}
			return JSON.stringify(obj, null, pretty);
		}

		/**
   * JSON字符串解析成对象
   * @param  {String} json 
   * @return {Object}      
   */

	}, {
		key: 'fromJson',
		value: function fromJson(json) {
			return this.isString(json) ? JSON.parse(json) : json;
		}

		/**
   * 扩展对象
   * @return {Object}
   */

	}, {
		key: 'extend',
		value: function extend() {
			var src = void 0,
			    copyIsArray = void 0,
			    copy = void 0,
			    name = void 0,
			    options = void 0,
			    clone = void 0,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = !1;

			if (typeof target === 'boolean') {
				deep = target;
				target = arguments[i] || {};
				i++;
			}

			if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !this.isFunction(target)) {
				target = {};
			}

			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				if ((options = arguments[i]) != null) {
					for (name in options) {
						src = target[name];
						copy = options[name];

						if (target === copy) {
							continue;
						}

						if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = !1;
								clone = src && this.isArray(src) ? src : [];
							} else {
								clone = src && this.isPlainObject(src) ? src : {};
							}
							target[name] = this.extend(deep, clone, copy);
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
			return target;
		}

		/**
   * 判断传入的参数是否为纯粹的对象，即直接量{}或new Object()创建的对象
   * @param  {[type]}  obj [description]
   * @return {Boolean}     [description]
   */

	}, {
		key: 'isPlainObject',
		value: function isPlainObject(obj) {
			var getProto = Object.getPrototypeOf;
			var class2type = {};
			var toString = class2type.toString;
			var hasOwn = class2type.hasOwnProperty;
			var fnToString = hasOwn.toString;
			var ObjectFunctionString = fnToString.call(Object);
			var proto = void 0,
			    Ctor = void 0;
			if (!obj || this.type(obj) !== '[object Object]') {
				return !1;
			}
			proto = getProto(obj);
			if (!proto) {
				return !0;
			}
			Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
			return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
		}

		/**
   * 判断对象是否为空
   * @param  {Object}  obj 
   * @return {Boolean}     
   */

	}, {
		key: 'isEmptyObject',
		value: function isEmptyObject(obj) {
			for (var i in obj) {
				return !1;
			}return !0;
		}

		/**
   * 判断对象的类型
   * @param  {Object} obj 
   * @return {String}     
   */

	}, {
		key: 'type',
		value: function type(obj) {
			var toString = Object.prototype.toString;

			if (obj == null) {
				return obj + '';
			}

			return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function' ? toString.call(obj) || 'object' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
		}

		/**
   * 合并对象并返回一个新的对象，目标对象自身也会改变
   * @param  {Array} args 
   * @return {Object}     
   */

	}, {
		key: 'merge',
		value: function merge() {
			return Object.assign.apply(Object, arguments);
		}

		/**
   * 拷贝对象并返回一个新的对象
   * @param  {Object} obj 
   * @return {Object}     
   */

	}, {
		key: 'clone',
		value: function clone(obj) {
			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || !obj) {
				return obj;
			}
			var copy = {};
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) {
					copy[attr] = obj[attr];
				}
			}
			return copy;
		}

		/**
   * 删除对象上的指定属性并返回一个新的对象
   * @param  {Object} obj  
   * @param  {Array} keys 
   * @return {[type]}      
   */

	}, {
		key: 'omit',
		value: function omit(obj, keys) {
			var o = this.clone(obj);
			keys.forEach(function (key) {
				delete o[key];
			});
			return o;
		}

		/**
   * 返回一个新数组，数组中的元素为指定属性的值
   * @param  {Array} arr 
   * @param  {String} key 
   * @return {Array}     
   */

	}, {
		key: 'pluck',
		value: function pluck(arr, key) {
			if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object' || arr.length === 0) {
				return [];
			}
			if (!key) {
				return arr;
			}
			return arr.map(function (a) {
				return a[key];
			});
		}

		/**
   * 返回序列化的值
   * @param  {String} value 
   * @return {String} 
   */

	}, {
		key: 'serializeValue',
		value: function serializeValue(value) {
			if (this.isObject(value)) return this.isDate(value) ? value.toISOString() : this.toJson(value);
			return value;
		}

		/**
   * 编码URI
   * @param  {String} value 
   * @param  {String} pctEncodeSpaces 
   * @return {String} 
   */

	}, {
		key: 'encodeUriQuery',
		value: function encodeUriQuery(value, pctEncodeSpaces) {
			return encodeURIComponent(value).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
		}

		/**
   * 对象序列化
   * @param  {Object} obj 
   * @return {String} 
   */

	}, {
		key: 'paramSerializer',
		value: function paramSerializer(obj) {
			if (!obj) return '';
			var that = this;
			var parts = [];

			var _loop = function _loop(key) {
				var value = obj[key];
				if (value === null || that.isUndefined(value)) return {
						v: void 0
					};
				if (that.isArray(value)) {
					value.forEach(function (v) {
						parts.push(that.encodeUriQuery(key) + '=' + that.encodeUriQuery(that.serializeValue(v)));
					});
				} else {
					parts.push(that.encodeUriQuery(key) + '=' + that.encodeUriQuery(that.serializeValue(value)));
				}
			};

			for (var key in obj) {
				var _ret = _loop(key);

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
			return parts.join('&');
		}

		/**
  * 拼接URL
  * @param  {String} obj 
  * @param  {Object} obj 
  * @return {String} 
  */

	}, {
		key: 'buildUrl',
		value: function buildUrl(url, obj) {
			var serializedParams = this.paramSerializer(obj);
			if (serializedParams.length > 0) {
				url += (url.indexOf('?') == -1 ? '?' : '&') + serializedParams;
			}
			return url;
		}
	}]);

	return Tools;
}();

exports.default = Tools;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redis = __webpack_require__(35);

var _redis2 = _interopRequireDefault(_redis);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redisLink = _config2.default['redis'][process.env.NODE_ENV || 'development']['connectionString'];
var redisClient = _redis2.default.createClient(redisLink);

redisClient.on('error', function (err) {
	return console.log('------ Redis connection failed ------' + err);
}).on('connect', function () {
	return console.log('------ Redis connection succeed ------');
});

exports.default = {
	redis: _redis2.default,
	redisClient: redisClient
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (app) {
	new _common2.default(app);
	new _qiniu2.default(app);
	new _banner2.default(app);
	new _classify2.default(app);
	new _goods2.default(app);
	new _cart2.default(app);
	new _address2.default(app);
	new _order2.default(app);
	new _help2.default(app);
	new _user2.default(app);
};

var _common = __webpack_require__(37);

var _common2 = _interopRequireDefault(_common);

var _qiniu = __webpack_require__(52);

var _qiniu2 = _interopRequireDefault(_qiniu);

var _banner = __webpack_require__(54);

var _banner2 = _interopRequireDefault(_banner);

var _classify = __webpack_require__(55);

var _classify2 = _interopRequireDefault(_classify);

var _goods = __webpack_require__(56);

var _goods2 = _interopRequireDefault(_goods);

var _cart = __webpack_require__(57);

var _cart2 = _interopRequireDefault(_cart);

var _address = __webpack_require__(58);

var _address2 = _interopRequireDefault(_address);

var _order = __webpack_require__(59);

var _order2 = _interopRequireDefault(_order);

var _help = __webpack_require__(60);

var _help2 = _interopRequireDefault(_help);

var _user = __webpack_require__(61);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _fs = __webpack_require__(6);

var _fs2 = _interopRequireDefault(_fs);

var _formidable = __webpack_require__(11);

var _formidable2 = _interopRequireDefault(_formidable);

var _request = __webpack_require__(12);

var _request2 = _interopRequireDefault(_request);

var _cheerio = __webpack_require__(38);

var _cheerio2 = _interopRequireDefault(_cheerio);

var _captchapng = __webpack_require__(39);

var _captchapng2 = _interopRequireDefault(_captchapng);

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = _bluebird2.default.promisifyAll(_fs2.default);

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			upload: _proxy2.default.upload
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.post('/api/common/file', this.uploadFile.bind(this));
			this.app.post('/api/common/file/:id', this.delFile.bind(this));
			this.app.post('/api/common/sign/check', this.signCheck.bind(this));
			this.app.get('/api/common/captcha(/:width)?(/:height)?', this.captcha.bind(this));
		}

		/**
   * 创建表单上传           
   */

	}, {
		key: 'initFormidable',
		value: function initFormidable(req, callback) {
			// 创建表单上传
			var form = new _formidable2.default.IncomingForm();

			// 设置编辑
			form.encoding = 'utf-8';

			// 设置文件存储路径
			form.uploadDir = _config2.default.upload.tmp;

			// 保留后缀
			form.keepExtensions = true;

			// 设置单文件大小限制    
			form.maxFieldsSize = 2 * 1024 * 1024;

			// 设置所有文件的大小总和
			form.maxFields = 1000;

			form.parse(req, function (err, fields, files) {
				return callback(err, fields, files);
			});
		}

		/**
   * @api {post} /common/file 上传文件
   * @apiDescription 上传文件
   * @apiName uploadFile
   * @apiGroup common
   *
   * @apiParam {File} files 文件
   *
   * @apiPermission none
   * @apiSampleRequest /common/file
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "上传成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"path": "path",
   *       	"create_at": "create_at"
   *       }
   *     }
   */

	}, {
		key: 'uploadFile',
		value: function uploadFile(req, res, next) {
			var _this = this;

			this.initFormidable(req, function (err, fields, files) {
				var _loop = function _loop(item) {
					var file = files[item];
					var tempfilepath = file.path;
					var filenewname = res.tools.randFilename(file);
					var filenewpath = _config2.default.upload.path + filenewname;
					var result = 'uploads/' + filenewname;

					// 将临时文件保存为正式的文件
					fs.renameAsync(tempfilepath, filenewpath).then(function (doc) {
						return _this.upload.newAndSave(file.name, result);
					}).then(function (doc) {
						return res.tools.setJson(0, '上传成功', doc);
					}).catch(function (err) {
						return next(err);
					});
				};

				for (var item in files) {
					_loop(item);
				}
			});
		}

		/**
   * @api {post} /common/file/:id 删除文件
   * @apiDescription 删除文件
   * @apiName delFile
   * @apiGroup common
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /common/file/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delFile',
		value: function delFile(req, res, next) {
			var filepath = null;
			this.upload.findById(req.params.id).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				filepath = 'public/' + doc.path;
				return doc.remove();
			}).then(function (doc) {
				return fs.unlinkAsync(filepath);
			}).then(function (doc) {
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /common/sign/check 登录认证
   * @apiDescription 登录认证
   * @apiName signCheck
   * @apiGroup common
   *
   * @apiPermission none
   * @apiSampleRequest /common/sign/check
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'signCheck',
		value: function signCheck(req, res, next) {
			return res.tools.setJson(0, '调用成功');
		}

		/**
   * @api {get} /common/captcha/:width/:height 验证码
   * @apiDescription 验证码
   * @apiName captcha
   * @apiGroup common
   *
   * @apiParam {String} width 宽度
   * @apiParam {String} height 高度
   * 
   * @apiPermission none
   * @apiSampleRequest /common/captcha/:width/:height
   */

	}, {
		key: 'captcha',
		value: function captcha(req, res, next) {
			var width = parseInt(req.params.width) || 80;
			var height = parseInt(req.params.height) || 30;
			var code = req.session.code = parseInt(Math.random() * 9000 + 1000);
			var captcha = new _captchapng2.default(width, height, code);

			captcha.color(0, 0, 0, 0);
			captcha.color(80, 80, 80, 255);

			var img = captcha.getBase64();
			var imgbase64 = new Buffer(img, 'base64');

			res.end(imgbase64);
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("captchapng");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FeatureBase2 = __webpack_require__(41);

var _FeatureBase3 = _interopRequireDefault(_FeatureBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestBase = function (_FeatureBase) {
	_inherits(RestBase, _FeatureBase);

	function RestBase(model) {
		_classCallCheck(this, RestBase);

		return _possibleConstructorReturn(this, (RestBase.__proto__ || Object.getPrototypeOf(RestBase)).call(this, model));
	}

	/**
  * 获取资源列表
  * @param  {Object} query   
  * @param  {Object} fields  
  * @param  {Object} options 
  * @return {Function}         
  */


	_createClass(RestBase, [{
		key: 'getAll',
		value: function getAll() {
			var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			var page = Number(options.page) || 1;
			var limit = Number(options.limit) || 10;
			var skip = (page - 1) * limit;
			var sort = options.sort || { create_at: -1 };

			return this.model.findAsync(query, fields, {
				skip: skip,
				limit: limit,
				sort: sort
			});
		}

		/**
   * 获取某个指定资源的信息
   * @param  {Object} query  
   * @param  {Object} fields 
   * @return {Function}        
   */

	}, {
		key: 'get',
		value: function get() {
			var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return this.model.findOneAsync(query, fields);
		}

		/**
   * 新建一个资源
   * @param  {Object} body 
   * @return {Function}      
   */

	}, {
		key: 'post',
		value: function post() {
			var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return new this.model(body).save();
		}

		/**
   * 更新某个指定资源的信息
   * @param  {Object} query   
   * @param  {Object} body    
   * @param  {Object} options 
   * @return {Function}         
   */

	}, {
		key: 'put',
		value: function put() {
			var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			body.update_at = Date.now();
			options.upsert = !0;
			options.new = !0;
			return this.model.findOneAndUpdate(query, body, options);
		}

		/**
   * 删除某个指定资源
   * @param  {Object} query   
   * @param  {Object} options 
   * @return {Function}         
   */

	}, {
		key: 'delete',
		value: function _delete() {
			var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return this.model.findOneAndRemove(query, options);
		}
	}]);

	return RestBase;
}(_FeatureBase3.default);

exports.default = RestBase;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeatureBase = function () {
	function FeatureBase(model) {
		_classCallCheck(this, FeatureBase);

		Object.assign(this, {
			model: model
		});

		this.suffix = 'Async';

		this.instanceSource = {
			Query: ['count', 'distinct', 'exec', 'find', 'findOne', 'findOneAndRemove', 'findOneAndUpdate', 'remove', 'update'],
			Model: ['remove', 'save',
			// extended from Document
			'update', 'validate', 'populate']
		};

		this.modelStaticsList = [
		// 'aggregate',
		'count', 'create', 'distinct', 'ensureIndexes', 'find', 'findById', 'findByIdAndRemove', 'findByIdAndUpdate', 'findOne', 'findOneAndRemove', 'findOneAndUpdate', 'geoNear', 'geoSearch', 'mapReduce', 'populate', 'remove', 'update'];

		this.init();
	}

	/**
  * init
  */


	_createClass(FeatureBase, [{
		key: 'init',
		value: function init() {
			var self = this;
			for (var key in self.instanceSource) {
				self.instanceSource[key].forEach(function (value) {
					self[value + self.suffix] = function () {
						return self.getPromise(_bluebird2.default, self.getResolver(self.model[value], [].concat(_toConsumableArray(Array.from(arguments))), self.model));
					};
				});
			}
			self.modelStaticsList.forEach(function (value) {
				self[value + self.suffix] = function () {
					return self.getPromise(_bluebird2.default, self.getResolver(self.model[value], [].concat(_toConsumableArray(Array.from(arguments))), self.model));
				};
			});
		}

		/**
   * getPromise
   * @param  {Object} Promise  
   * @param  {Function} resolver 
   * @return {Function}          
   */

	}, {
		key: 'getPromise',
		value: function getPromise(Promise, resolver) {
			//bluebird
			if (Promise.promisifyAll) return new Promise(resolver);
			// when
			if (Promise.lift) return Promise.promise(resolver);
			//RSVP / Q / es6-promise
			if (Promise.Promise) return new Promise.Promise(resolver);

			throw new Error('Promise library is not supported');
		}

		/**
   * getResolver
   * @param  {Function} method  
   * @param  {Object} args    
   * @param  {Object} context 
   * @return {Function}         
   */

	}, {
		key: 'getResolver',
		value: function getResolver(method, args, context) {
			return function (resolve, reject) {
				args.push(function (err) {
					if (err) return reject(err);
					var receivedArgs = [].concat(_toConsumableArray(Array.from(arguments)));
					// remove the first argument for error
					receivedArgs.shift();
					resolve(receivedArgs.length > 1 ? receivedArgs : receivedArgs[0]);
				});
				method.apply(context, args);
			};
		}

		/**
   * 关联查询资源列表
   * @param  {Object} params  
   * @param  {Object} options 
   * @return {Function}         
   */

	}, {
		key: 'findAndPopulateAsync',
		value: function findAndPopulateAsync() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			params.options = params.options || {};
			var page = Number(params.options.page) || 1;
			var limit = Number(params.options.limit) || 10;
			var skip = (page - 1) * limit;
			var sort = params.options.sort || { create_at: -1 };

			return this.model.find(params.query, params.fields, {
				skip: skip,
				limit: limit,
				sort: sort
			}).populate(options).exec();
		}

		/**
   * 关联查询某个指定资源
   * @param  {Object} params  
   * @param  {Object} options 
   * @return {Function}         
   */

	}, {
		key: 'findOneAndPopulateAsync',
		value: function findOneAndPopulateAsync() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return this.model.findOne(params.query, params.fields).populate(options).exec();
		}
	}]);

	return FeatureBase;
}();

exports.default = FeatureBase;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema({
	title: String,
	remark: String,
	sort: Number,
	is_show: Boolean,
	images: Array,
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('banner', Schema);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema({
	name: String,
	remark: String,
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('classify', Schema);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var Schema = _mongoose2.default.Schema({
	types: [{
		type: ObjectId,
		ref: 'classify'
	}],
	name: String,
	price: Number,
	remark: String,
	images: Array,
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('goods', Schema);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var Schema = _mongoose2.default.Schema({
	goods: {
		type: ObjectId,
		ref: 'goods'
	},
	total: {
		type: Number,
		default: 1
	},
	amount: Number,
	totalAmount: Number,
	user: {
		type: ObjectId,
		ref: 'user'
	},
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('cart', Schema);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var Schema = _mongoose2.default.Schema({
	name: String,
	gender: String,
	tel: String,
	address: String,
	is_def: {
		type: Boolean,
		default: false
	},
	user: {
		type: ObjectId,
		ref: 'user'
	},
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('address', Schema);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.Types.ObjectId;

var Schema = _mongoose2.default.Schema({
	totalAmount: Number,
	payAmount: Number,
	payTime: Date,
	status: {
		type: String,
		default: 'submitted'
	},
	recipientName: String,
	recipientGender: String,
	recipientTel: String,
	recipientAddress: String,
	items: Array,
	user: {
		type: ObjectId,
		ref: 'user'
	},
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('order', Schema);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema({
	title: String,
	content: String,
	create_at: {
		type: Date,
		default: Date.now()
	},
	update_at: Date
});

exports.default = _mongoose2.default.model('help', Schema);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
	function Common(model) {
		_classCallCheck(this, Common);

		Object.assign(this, {
			model: model
		});
	}

	/**
  * 新建一个用户
  * @param  {Object} body 
  * @return {Function}          
  */


	_createClass(Common, [{
		key: 'newAndSave',
		value: function newAndSave(body) {
			return new this.model(body).save();
		}

		/**
   * 根据用户名查询一个用户
   * @param  {String}   username 
   * @return {Function}            
   */

	}, {
		key: 'findByName',
		value: function findByName(username) {
			return this.model.findOneAsync({
				username: username
			});
		}
	}]);

	return Common;
}();

exports.default = new Common(_user2.default);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _upload = __webpack_require__(51);

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
	function Common(model) {
		_classCallCheck(this, Common);

		Object.assign(this, {
			model: model
		});
	}

	/**
  * 上传文件
  * @param  {String}   name     
  * @param  {String}   path     
  * @return {Function}            
  */


	_createClass(Common, [{
		key: 'newAndSave',
		value: function newAndSave(name, path) {
			return new this.model({
				name: name,
				path: path
			}).save();
		}

		/**
   * 根据ID查询文件
   * @param  {String}   id       
   * @return {Function}            
   */

	}, {
		key: 'findById',
		value: function findById(id) {
			return this.model.findByIdAsync(id);
		}
	}]);

	return Common;
}();

exports.default = new Common(_upload2.default);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema({
	name: String,
	path: String,
	create_at: {
		type: Date,
		default: Date.now()
	}
});

exports.default = _mongoose2.default.model('upload', Schema);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _formidable = __webpack_require__(11);

var _formidable2 = _interopRequireDefault(_formidable);

var _qn = __webpack_require__(53);

var _qn2 = _interopRequireDefault(_qn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.initClient();
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.post('/api/qiniu/upload', this.upload.bind(this));
			this.app.post('/api/qiniu/download', this.download.bind(this));
			this.app.post('/api/qiniu/saveAsURL', this.saveAsURL.bind(this));
			this.app.post('/api/qiniu/stat', this.stat.bind(this));
			this.app.post('/api/qiniu/move', this.move.bind(this));
			this.app.post('/api/qiniu/copy', this.copy.bind(this));
			this.app.post('/api/qiniu/delete', this.delete.bind(this));
			this.app.post('/api/qiniu/list', this.list.bind(this));
			this.app.post('/api/qiniu/image/info', this.imageInfo.bind(this));
			this.app.post('/api/qiniu/image/exif', this.imageExif.bind(this));
			this.app.post('/api/qiniu/image/view', this.imageView.bind(this));
			this.app.post('/api/qiniu/image/mogr', this.imageMogr.bind(this));
			this.app.post('/api/qiniu/image/watermark', this.watermark.bind(this));
			this.app.post('/api/qiniu/md2html', this.md2html.bind(this));
			this.app.post('/api/qiniu/qrcode', this.qrcode.bind(this));
		}

		/**
   * init qn
   */

	}, {
		key: 'initClient',
		value: function initClient() {
			this.client = _qn2.default.create({
				accessKey: 'AIoInqqk9hMIdzCVpUuUmAS8PhFgrO6MXsse4PFD',
				secretKey: 'wh3JtbPWa2kCW22wRd17DJ6v1hPhSRB5fSWPw6UN',
				bucket: 'skyvow',
				origin: 'http://7xo4dc.com1.z0.glb.clouddn.com/'
			});
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {post} /qiniu/upload 上传文件
   * @apiDescription 上传文件
   * @apiName upload
   * @apiGroup qiniu
   *
   * @apiParam {File} file 文件
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/upload
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "上传成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'upload',
		value: function upload(req, res, next) {
			var _this = this;

			var form = new _formidable2.default.IncomingForm();
			form.parse(req, function (err, fields, files) {
				for (var item in files) {
					var file = files[item];
					var tempfilepath = file.path;
					var filenewname = res.tools.randFilename(file);

					_this.client.uploadFile(tempfilepath, { key: filenewname }, function (err, doc) {
						if (err) return next(err);
						return res.tools.setJson(0, '上传成功', {
							key: doc.key,
							path: doc.url
						});
					});
				}
			});
		}

		/**
   * @api {post} /qiniu/download 下载文件
   * @apiDescription 下载文件
   * @apiName download
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/download
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'download',
		value: function download(req, res, next) {
			this.client.stat(req.body.key, function (err, content, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功', {
					content: content,
					doc: doc
				});
			});
		}

		/**
   * @api {post} /qiniu/saveAsURL 保存文件
   * @apiDescription 保存文件
   * @apiName saveAsURL
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {String} [name] 重命名
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/saveAsURL
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": "data"
   *     }
   */

	}, {
		key: 'saveAsURL',
		value: function saveAsURL(req, res, next) {
			var key = req.body.key;
			var name = req.body.name;
			var doc = this.client.saveAsURL(key, name);

			return res.tools.setJson(0, '调用成功', doc);
		}

		/**
   * @api {post} /qiniu/stat 文件信息
   * @apiDescription 文件信息
   * @apiName stat
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/stat
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"fsize": "fsize",
   *       	"hash": "hash",
   *       	"mimeType": "mimeType",
   *       	"putTime": "putTime",
   *       }
   *     }
   */

	}, {
		key: 'stat',
		value: function stat(req, res, next) {
			this.client.stat(req.body.key, function (err, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功', doc);
			});
		}

		/**
   * @api {post} /qiniu/move 移动文件
   * @apiDescription 移动文件
   * @apiName move
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {String} [name] 重命名
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/move
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'move',
		value: function move(req, res, next) {
			var k1 = req.body.key;
			var name = req.body.name;
			var k2 = name ? name : res.tools.randFilename({ name: k1 });

			this.client.move(k1, k2, function (err, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功');
			});
		}

		/**
   * @api {post} /qiniu/copy 复制文件
   * @apiDescription 复制文件
   * @apiName copy
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {String} [name] 重命名
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/copy
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'copy',
		value: function copy(req, res, next) {
			var k1 = req.body.key;
			var name = req.body.name;
			var k2 = name ? name : res.tools.randFilename({ name: k1 });

			this.client.copy(k1, k2, function (err, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功');
			});
		}

		/**
   * @api {post} /qiniu/delete 删除文件
   * @apiDescription 删除文件
   * @apiName delete
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   *
   * @apiPermission none
   * @apiSampleRequest /qiniu/delete
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			this.client.delete(req.body.key, function (err, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '删除成功');
			});
		}

		/**
   * @api {post} /qiniu/list 列出所有文件
   * @apiDescription 列出所有文件
   * @apiName list
   * @apiGroup qiniu
   *
   * @apiParam {Object} [opt] 配置参数
   *  - {String} prefix 指定要过滤出来的前缀，默认 '/'
   *  - {String} marker 为服务器上次导出时返回的标记，没有可以不填
   *  - {String} limit 单次查询返回的最大条目数，最大不超过1000
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/list
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"marker": "marker",
   *       	"items": [{
   *       		"key": "key",
   *       		"hash": "hash",
   *       		"fsize": "fsize",
   *       		"mimeType": "mimeType",
   *       		"putTime": "putTime",
   *       	}]
   *       }
   *     }
   */

	}, {
		key: 'list',
		value: function list(req, res, next) {
			var opt = req.body.opt || {};
			this.client.list(opt, function (err, docs) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功', docs);
			});
		}

		/**
   * @api {post} /qiniu/image/info 图片基本信息
   * @apiDescription 图片基本信息
   * @apiName imageInfo
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/image/info
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"format": "format",
   *       	"width": "width",
   *       	"height": "height",
   *       	"colorModel": "colorModel",
   *       	"orientation": "orientation",
   *       }
   *     }
   */

	}, {
		key: 'imageInfo',
		value: function imageInfo(req, res, next) {
			this.client.imageInfo(req.body.key, function (err, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功', doc);
			});
		}

		/**
   * @api {post} /qiniu/image/exif 图片EXIF信息
   * @apiDescription 图片EXIF信息
   * @apiName imageExif
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/image/exif
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'imageExif',
		value: function imageExif(req, res, next) {
			this.client.exif(req.body.key, function (err, doc) {
				if (err) return next(err);
				return res.tools.setJson(0, '调用成功', doc);
			});
		}

		/**
   * @api {post} /qiniu/image/view 生成缩略图
   * @apiDescription 生成缩略图
   * @apiName imageView
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {Object} opt 配置参数
   *  - {Number} mode 
   *  	- mode=1  表示限定目标缩略图的宽度和高度，放大并从缩略图中央处裁剪为指定 Width x Height 大小的图片
   *  	- mode=2  指定 Width 和 Height，表示限定目标缩略图的长和宽，将缩略图的大小限定在指定的宽高矩形内
   *  	- mode=2  指定 Width 但不指定 Height，表示限定目标缩略图的宽度，高度等比缩略自适应
   *  	- mode=2  指定 Height 但不指定 Width，表示限定目标缩略图的高度，宽度等比缩略自适应
   *  - {Number} width 宽度
   *  - {Number} height 高度
   *  - {Number} [q] 质量
   *  - {String} [format] 指定目标缩略图的输出格式，取值范围：jpg, gif, png, webp 等图片格式
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/image/view
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'imageView',
		value: function imageView(req, res, next) {
			var key = req.body.key;
			var opt = req.body.opt || {};
			var doc = this.client.imageView(key, opt);

			return res.tools.setJson(0, '调用成功', doc);
		}

		/**
   * @api {post} /qiniu/image/mogr 高级图片处理（缩略、裁剪、旋转、转化）
   * @apiDescription 高级图片处理（缩略、裁剪、旋转、转化）
   * @apiName imageMogr
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {Object} opt 配置参数
   *  - {String} [thumbnail] 缩略图大小，详解见下
   *  - {String} [gravity] 位置偏移，只会使其后的裁剪偏移({offset})受到影响，默认值为 NorthWest（左上角）
   *      可选值：NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast 
   *  - {String} [crop] 裁剪大小和偏移，详解见下
   *  - {Number} [quality] 图片质量，取值范围是[1, 100]
   *  - {Number} [rotate] 旋转角度
   *  - {String} [format] 输出格式，可选为jpg, gif, png, bmp, tiff, webp等
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/image/mogr
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'imageMogr',
		value: function imageMogr(req, res, next) {
			var key = req.body.key;
			var opt = req.body.opt || {};
			var doc = this.client.imageMogr(key, opt);

			return res.tools.setJson(0, '调用成功', doc);
		}

		/**
   * @api {post} /qiniu/image/watermark 图片水印（图片、文字）
   * @apiDescription 图片水印（图片、文字）
   * @apiName watermark
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {Object} opt 配置参数
   *  - {Number} mode 
   *  	- mode=1 时，表示图片水印：
   *  	- mode=2 时，表示文字水印：
   *   - {String} image 水印图片，使用图片水印时需指定用于水印的远程图片URL。EncodedImageURL = urlsafe_base64_encode(ImageURL)
   *   - {String} text 水印文本，文字水印时必须。EncodedText = urlsafe_base64_encode(Text)
   *   - {String} [font] 字体名，若水印文本为非英文字符（比如中文）构成，则必须。EncodedFontName = urlsafe_base64_encode(FontName)
   *   - {Number} [fontsize] 字体大小，0 表示默认，单位: 缇，等于 1⁄20 磅
   *   - {String} [fill] 字体颜色。EncodedTextColor = urlsafe_base64_encode(TextColor)
   *       RGB格式，可以是颜色名称（比如 red）或十六进制（比如 #FF0000），
   *       参考 [RGB颜色编码表](http://www.rapidtables.com/web/color/RGB_Color.htm)
   *  - {Number} [dissolve] 透明度，取值范围 1-100，默认值 100，即表示 100%（不透明）
   *  - {String} [gravity] 位置，默认值为 SouthEast（右下角）
   *      可选值：NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast
   *  - {Number} [dx] 横向边距，单位：像素（px），默认值为 10
   *  - {Number} [dy] 纵向边距，单位：像素（px），默认值为 10
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/image/watermark
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'watermark',
		value: function watermark(req, res, next) {
			var key = req.body.key;
			var opt = req.body.opt || {};
			var doc = this.client.watermark(key, opt);

			return res.tools.setJson(0, '调用成功', doc);
		}

		/**
   * @api {post} /qiniu/md2html Markdown转HTML
   * @apiDescription Markdown转HTML
   * @apiName md2html
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {Object} opt 配置参数
   *  - {Number} mode 0 表示转为完整的 HTML(head+body) 输出; 1 表示只转为HTML Body，缺省值：0
   *  - {String} css CSS 样式的URL
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/md2html
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'md2html',
		value: function md2html(req, res, next) {
			var key = req.body.key;
			var opt = req.body.opt || {};
			var doc = this.client.md2html(key, opt);

			return res.tools.setJson(0, '调用成功', doc);
		}

		/**
   * @api {post} /qiniu/qrcode 生成二维码
   * @apiDescription 生成二维码
   * @apiName qrcode
   * @apiGroup qiniu
   *
   * @apiParam {String} key 文件名
   * @apiParam {Number} [mode=0] 可选值0或1，0表示以当前url生成二维码，1表示以当前URL中的数据生成二维码
   * @apiParam {String} [level=L] 冗余度，可选值 L、M、Q、H
   * 
   * @apiPermission none
   * @apiSampleRequest /qiniu/qrcode
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": "data"
   *     }
   */

	}, {
		key: 'qrcode',
		value: function qrcode(req, res, next) {
			var key = req.body.key;
			var mode = req.body.mode;
			var level = req.body.level;
			var doc = this.client.qrcode(key, mode, level);

			return res.tools.setJson(0, '调用成功', doc);
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("qn");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.banner
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.get('/api/banner', this.getAll.bind(this));
			this.app.get('/api/banner/:id', this.get.bind(this));
			this.app.post('/api/banner', this.post.bind(this));
			this.app.put('/api/banner/:id', this.put.bind(this));
			this.app.delete('/api/banner/:id', this.delete.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {get} /banner 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup banner
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   * @apiParam {Boolean} [is_show] 指定is_show过滤
   *
   * @apiPermission none
   * @apiSampleRequest /banner
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var query = {};

			var fields = {};

			var options = {
				page: req.query.page,
				limit: req.query.limit
			};

			if (req.query.is_show) {
				query.is_show = true;
			}

			Promise.all([this.model.countAsync(query), this.model.getAll(query, fields, options)]).then(function (docs) {
				res.tools.setJson(0, '调用成功', {
					items: docs[1],
					paginate: new res.paginate(Number(options.page), Number(options.limit), docs[0]).item
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /banner/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup banner
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /banner/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var fields = {};

			this.model.get(query, fields).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /banner 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup banner
   *
   * @apiParam {String} title 标题
   * @apiParam {String} remark 描述
   * @apiParam {Number} sort 排序
   * @apiParam {Boolean} is_show 是否显示
   * @apiParam {Array} images 图片
   *
   * @apiPermission none
   * @apiSampleRequest /banner
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var body = {
				title: req.body.title,
				remark: req.body.remark,
				sort: req.body.sort || 99,
				is_show: req.body.is_show,
				images: req.body.images
			};

			this.model.post(body).then(function (doc) {
				return res.tools.setJson(0, '新增成功', { _id: doc._id });
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {put} /banner/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup banner
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [title] 标题
   * @apiParam {String} [remark] 描述
   * @apiParam {Number} [sort] 排序
   * @apiParam {Boolean} [is_show] 是否显示
   * @apiParam {Array} [images] 图片
   *
   * @apiPermission none
   * @apiSampleRequest /banner/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var body = {
				title: req.body.title,
				remark: req.body.remark,
				sort: req.body.sort || 99,
				is_show: req.body.is_show,
				images: req.body.images
			};

			this.model.put(query, body).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {delete} /banner/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup banner
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /banner/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.classify
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.get('/api/classify', this.getAll.bind(this));
			this.app.get('/api/classify/:id', this.get.bind(this));
			this.app.post('/api/classify', this.post.bind(this));
			this.app.put('/api/classify/:id', this.put.bind(this));
			this.app.delete('/api/classify/:id', this.delete.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {get} /classify 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup classify
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   *
   * @apiPermission none
   * @apiSampleRequest /classify
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"remark": "remark",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var query = {};

			var fields = {};

			var options = {
				page: req.query.page,
				limit: req.query.limit
			};

			Promise.all([this.model.countAsync(query), this.model.getAll(query, fields, options)]).then(function (docs) {
				res.tools.setJson(0, '调用成功', {
					items: docs[1],
					paginate: new res.paginate(Number(options.page), Number(options.limit), docs[0]).item
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /classify/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup classify
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /classify/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"remark": "remark",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var fields = {};

			this.model.get(query, fields).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /classify 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup classify
   *
   * @apiParam {String} name 标题
   * @apiParam {String} remark 内容
   *
   * @apiPermission none
   * @apiSampleRequest /classify
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var body = {
				name: req.body.name,
				remark: req.body.remark
			};

			this.model.post(body).then(function (doc) {
				return res.tools.setJson(0, '新增成功', { _id: doc._id });
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {put} /classify/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup classify
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [name] 标题
   * @apiParam {String} [remark] 内容
   *
   * @apiPermission none
   * @apiSampleRequest /classify/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"remark": "remark",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var body = {
				name: req.body.name,
				remark: req.body.remark
			};

			this.model.put(query, body).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {delete} /classify/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup classify
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /classify/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.goods
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.get('/api/goods', this.getAll.bind(this));
			this.app.get('/api/goods/:id', this.get.bind(this));
			this.app.post('/api/goods', this.post.bind(this));
			this.app.put('/api/goods/:id', this.put.bind(this));
			this.app.delete('/api/goods/:id', this.delete.bind(this));
			this.app.get('/api/goods/search/all', this.search.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {get} /goods 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup goods
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   *
   * @apiPermission none
   * @apiSampleRequest /goods
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"price": "price",
   *       	"remark": "remark",
   *       	"images": "images",
   *       	"types": "types",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var query = {};

			var opts = {
				page: req.query.page,
				limit: req.query.limit
			};

			if (req.query.type) {
				query.types = req.query.type;
			}

			if (req.query.keyword) {
				query.name = req.query.keyword;
			}

			var params = {
				query: query,
				fields: {},
				options: opts
			};

			var options = {
				path: 'types',
				select: {}
			};

			Promise.all([this.model.countAsync(query), this.model.findAndPopulateAsync(params, options)]).then(function (docs) {
				res.tools.setJson(0, '调用成功', {
					items: docs[1],
					paginate: new res.paginate(Number(opts.page), Number(opts.limit), docs[0]).item
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /goods/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup goods
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /goods/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"price": "price",
   *       	"remark": "remark",
   *       	"images": "images",
   *       	"types": "types",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var params = {
				query: {
					_id: req.params.id
				},
				fields: {},
				options: {}
			};

			var options = {
				path: 'types',
				select: {}
			};

			this.model.findOneAndPopulateAsync(params, options).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /goods 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup goods
   *
   * @apiParam {String} name 名称
   * @apiParam {Number} price 价格
   * @apiParam {String} remark 简介
   * @apiParam {Array} images 图片
   * @apiParam {Array} types 分类
   *
   * @apiPermission none
   * @apiSampleRequest /goods
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var body = {
				name: req.body.name,
				price: req.body.price,
				remark: req.body.remark,
				images: req.body.images,
				types: req.body.types
			};

			this.model.post(body).then(function (doc) {
				return res.tools.setJson(0, '新增成功', { _id: doc._id });
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {put} /goods/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup goods
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [name] 名称
   * @apiParam {String} [price] 价格
   * @apiParam {String} [remark] 简介
   * @apiParam {Array} [images] 图片
   * @apiParam {Array} [types] 分类
   *
   * @apiPermission none
   * @apiSampleRequest /goods/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"name": "name",
   *       	"price": "price",
   *       	"remark": "remark",
   *       	"images": "images",
   *       	"types": "types",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var body = {
				name: req.body.name,
				price: req.body.price,
				remark: req.body.remark,
				images: req.body.images,
				types: req.body.types
			};

			this.model.put(query, body).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {delete} /goods/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup goods
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /goods/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {search} /goods/search/all 按关键词查询资源
   * @apiDescription 按关键词查询资源
   * @apiName search
   * @apiGroup goods
   *
   * @apiParam {String} keyword 关键词
   * @apiSampleRequest /goods/search/all
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"num": "num",
   *       }]
   *     }
   */

	}, {
		key: 'search',
		value: function search(req, res, next) {
			var keyword = req.query.keyword;
			var pattern = keyword && new RegExp(keyword);

			this.model.model.aggregate([{
				$match: {
					name: pattern
				}
			}, {
				$group: {
					_id: '$name',
					num: {
						$sum: 1
					}
				}
			}]).then(function (doc) {
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.cart
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.get('/api/cart', this.getAll.bind(this));
			this.app.get('/api/cart/:id', this.get.bind(this));
			this.app.post('/api/cart', this.post.bind(this));
			this.app.put('/api/cart/:id', this.put.bind(this));
			this.app.delete('/api/cart/:id', this.delete.bind(this));
			this.app.post('/api/cart/clear', this.clear.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {get} /cart 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup cart
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   * @apiParam {Boolean} [is_show] 指定is_show过滤
   *
   * @apiPermission none
   * @apiSampleRequest /cart
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var query = {
				user: req.user._id
			};

			var params = {
				query: query,
				fields: {},
				options: {}
			};

			var options = {
				path: 'goods',
				select: {}
			};

			this.model.findAndPopulateAsync(params, options).then(function (docs) {
				return res.tools.setJson(0, '调用成功', docs);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /cart/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup cart
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /cart/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			var params = {
				query: query,
				fields: {},
				options: {}
			};

			var options = {
				path: 'goods',
				select: {}
			};

			this.model.findOneAndPopulateAsync(params, options).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /cart 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup cart
   *
   * @apiParam {String} title 标题
   * @apiParam {String} remark 描述
   * @apiParam {Number} sort 排序
   * @apiParam {Boolean} is_show 是否显示
   * @apiParam {Array} images 图片
   *
   * @apiPermission none
   * @apiSampleRequest /cart
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var _this = this;

			var query = {
				goods: req.body.goods,
				user: req.user._id
			};

			var body = {
				goods: req.body.goods,
				total: Number(req.body.total) || 1,
				user: req.user._id
			};

			var p1 = _proxy2.default.goods.findByIdAsync(query.goods);
			var p2 = this.model.findOneAsync(query);

			Promise.all([p1, p2]).then(function (doc) {
				var goods = doc[0];
				var cart = doc[1];

				if (!goods) return res.tools.setJson(1, '资源不存在或已删除');

				if (!cart) {
					body.amount = goods.price;
					body.totalAmount = goods.price * body.total;
					return _this.model.post(body);
				}

				cart.total = cart.total + body.total;
				cart.amount = goods.price;
				cart.totalAmount = goods.price * cart.total;
				return cart.save();
			}).then(function (doc) {
				return res.tools.setJson(0, '新增成功', { _id: doc._id });
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {put} /cart/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup cart
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [title] 标题
   * @apiParam {String} [remark] 描述
   * @apiParam {Number} [sort] 排序
   * @apiParam {Boolean} [is_show] 是否显示
   * @apiParam {Array} [images] 图片
   *
   * @apiPermission none
   * @apiSampleRequest /cart/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			var body = {
				total: req.body.total
			};

			this.model.findOneAsync(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				doc.total = Math.abs(body.total);
				doc.totalAmount = Math.abs(doc.amount * doc.total);
				return doc.save();
			}).then(function (doc) {
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {delete} /cart/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup cart
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /cart/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {clear} /cart/clear 清空某个指定资源
   * @apiDescription 清空某个指定资源
   * @apiName clear
   * @apiGroup cart
   *
   * @apiSampleRequest /cart/clear
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'clear',
		value: function clear(req, res, next) {
			var query = {
				user: req.user._id
			};

			this.model.removeAsync(query).then(function (doc) {
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.address
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.post('/api/address/default/:id', this.setDefault.bind(this));
			this.app.get('/api/address/default', this.getDefault.bind(this));
			this.app.get('/api/address', this.getAll.bind(this));
			this.app.get('/api/address/:id', this.get.bind(this));
			this.app.post('/api/address', this.post.bind(this));
			this.app.put('/api/address/:id', this.put.bind(this));
			this.app.delete('/api/address/:id', this.delete.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {post} /address/default/:id 设置默认地址
   * @apiDescription 设置默认地址
   * @apiName setDefault
   * @apiGroup address
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /address/default/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'setDefault',
		value: function setDefault(req, res, next) {
			var _this = this;

			var query = {
				is_def: true,
				user: req.user._id
			};

			var update = {
				$set: {
					is_def: false
				}
			};

			this.model.findOneAndUpdateAsync(query, update).then(function (doc) {
				return _this.model.findOneAndUpdateAsync({ _id: req.params.id }, { $set: { is_def: true } });
			}).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /address/default 获取默认地址
   * @apiDescription 获取默认地址
   * @apiName getDefault
   * @apiGroup address
   *
   * @apiPermission none
   * @apiSampleRequest /address/default
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'getDefault',
		value: function getDefault(req, res, next) {
			var query = {
				is_def: true,
				user: req.user._id
			};

			var fields = {};

			this.model.get(query, fields).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /address 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup address
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   * @apiParam {Boolean} [is_show] 指定is_show过滤
   *
   * @apiPermission none
   * @apiSampleRequest /address
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var query = {
				user: req.user._id
			};

			var fields = {};

			var options = {
				page: req.query.page,
				limit: req.query.limit
			};

			Promise.all([this.model.countAsync(query), this.model.getAll(query, fields, options)]).then(function (docs) {
				res.tools.setJson(0, '调用成功', {
					items: docs[1],
					paginate: new res.paginate(Number(options.page), Number(options.limit), docs[0]).item
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /address/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup address
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /address/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			var fields = {};

			this.model.get(query, fields).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /address 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup address
   *
   * @apiParam {String} title 标题
   * @apiParam {String} remark 描述
   * @apiParam {Number} sort 排序
   * @apiParam {Boolean} is_show 是否显示
   * @apiParam {Array} images 图片
   *
   * @apiPermission none
   * @apiSampleRequest /address
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var _this2 = this;

			var query = {
				is_def: true,
				user: req.user._id
			};

			var update = {
				$set: {
					is_def: false
				}
			};

			var body = {
				name: req.body.name,
				gender: req.body.gender,
				tel: req.body.tel,
				address: req.body.address,
				is_def: req.body.is_def,
				user: req.user._id
			};

			if (body.is_def) {
				this.model.findOneAndUpdateAsync(query, update).then(function (doc) {
					return _this2.model.post(body);
				}).then(function (doc) {
					return res.tools.setJson(0, '新增成功', { _id: doc._id });
				}).catch(function (err) {
					return next(err);
				});
			}

			if (!body.is_def) {
				this.model.countAsync({ user: req.user._id }).then(function (doc) {
					if (!doc) body.is_def = true;
					return _this2.model.post(body);
				}).then(function (doc) {
					return res.tools.setJson(0, '新增成功', { _id: doc._id });
				}).catch(function (err) {
					return next(err);
				});
			}
		}

		/**
   * @api {put} /address/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup address
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [title] 标题
   * @apiParam {String} [remark] 描述
   * @apiParam {Number} [sort] 排序
   * @apiParam {Boolean} [is_show] 是否显示
   * @apiParam {Array} [images] 图片
   *
   * @apiPermission none
   * @apiSampleRequest /address/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var _this3 = this;

			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			var body = {
				name: req.body.name,
				gender: req.body.gender,
				tel: req.body.tel,
				address: req.body.address,
				is_def: req.body.is_def
			};

			var find = {
				is_def: true,
				user: req.user._id
			};

			var update = {
				$set: {
					is_def: false
				}
			};

			if (body.is_def) {
				this.model.findOneAndUpdateAsync(find, update).then(function (doc) {
					return _this3.model.put(query, body);
				}).then(function (doc) {
					if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
					return res.tools.setJson(0, '更新成功', doc);
				}).catch(function (err) {
					return next(err);
				});
			}

			if (!body.is_def) {
				this.model.put(query, body).then(function (doc) {
					if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
					return res.tools.setJson(0, '更新成功', doc);
				}).catch(function (err) {
					return next(err);
				});
			}
		}

		/**
   * @api {delete} /address/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup address
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /address/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.order
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.get('/api/order', this.getAll.bind(this));
			this.app.get('/api/order/:id', this.get.bind(this));
			this.app.post('/api/order', this.post.bind(this));
			this.app.put('/api/order/:id', this.put.bind(this));
			this.app.delete('/api/order/:id', this.delete.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {get} /order 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup order
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   * @apiParam {Boolean} [is_show] 指定is_show过滤
   *
   * @apiPermission none
   * @apiSampleRequest /order
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var status = req.query.type;

			var query = {
				user: req.user._id,
				status: status
			};

			status === 'all' && delete query.status;

			var opts = {
				page: req.query.page,
				limit: req.query.limit
			};

			var params = {
				query: query,
				fields: {},
				options: opts
			};

			var options = {
				path: 'user',
				select: {}
			};

			Promise.all([this.model.countAsync(query), this.model.findAndPopulateAsync(params, options)]).then(function (docs) {
				res.tools.setJson(0, '调用成功', {
					items: docs[1],
					paginate: new res.paginate(Number(opts.page), Number(opts.limit), docs[0]).item
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /order/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup order
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /order/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			var params = {
				query: query,
				fields: {},
				options: {}
			};

			var options = {
				path: 'user',
				select: {}
			};

			this.model.findOneAndPopulateAsync(params, options).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /order 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup order
   *
   * @apiParam {String} title 标题
   * @apiParam {String} remark 描述
   * @apiParam {Number} sort 排序
   * @apiParam {Boolean} is_show 是否显示
   * @apiParam {Array} images 图片
   *
   * @apiPermission none
   * @apiSampleRequest /order
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var _this = this;

			var body = {
				items: [],
				totalAmount: 0,
				address_id: req.body.address_id,
				user: req.user._id
			};

			var query = {
				_id: {
					$in: req.body.items.map(function (n) {
						return n.id;
					})
				}
			};

			var params = {
				query: query,
				fields: {},
				options: {}
			};

			var options = {
				path: 'types',
				select: {}
			};

			_proxy2.default.address.findByIdAsync(body.address_id).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '地址不存在或已删除');
				body.recipientName = doc.name;
				body.recipientGender = doc.gender;
				body.recipientTel = doc.tel;
				body.recipientAddress = doc.address;
				return _proxy2.default.goods.findAndPopulateAsync(params, options);
			}).then(function (doc) {
				doc.forEach(function (n) {
					var items = {
						goods: n,
						meta: {}
					};
					req.body.items.forEach(function (m) {
						if (n._id.toString() === m.id.toString()) {
							items.meta.total = Math.abs(m.total);
							items.meta.totalAmount = Math.abs(n.price * m.total);
							body.totalAmount += items.meta.totalAmount;
						}
					});
					body.items.push(items);
				});
				return _this.model.post(body);
			}).then(function (doc) {
				_proxy2.default.cart.removeAsync({
					user: req.user._id,
					goods: {
						$in: req.body.items.map(function (n) {
							return n.id;
						})
					}
				});
				res.tools.setJson(0, '新增成功', { _id: doc._id });
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {put} /order/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup order
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [title] 标题
   * @apiParam {String} [remark] 描述
   * @apiParam {Number} [sort] 排序
   * @apiParam {Boolean} [is_show] 是否显示
   * @apiParam {Array} [images] 图片
   *
   * @apiPermission none
   * @apiSampleRequest /order/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"images": [{
   *       		"_id": "_id",
   *       		"name": "name",
   *       		"path": "path",
   *       		"create_at": "create_at"
   *       	}],
   *       	"is_show": "is_show",
   *       	"remark": "remark",
   *       	"sort": "sort",
   *       	"title": "title",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			var body = {
				title: req.body.title,
				remark: req.body.remark,
				sort: req.body.sort || 99,
				is_show: req.body.is_show,
				images: req.body.images
			};

			this.model.put(query, body).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {delete} /order/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup order
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /order/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id,
				user: req.user._id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.help
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.get('/api/help', this.getAll.bind(this));
			this.app.get('/api/help/:id', this.get.bind(this));
			this.app.post('/api/help', this.post.bind(this));
			this.app.put('/api/help/:id', this.put.bind(this));
			this.app.delete('/api/help/:id', this.delete.bind(this));
		}

		/**
   * @apiDefine Header
   * @apiHeader {String} Authorization jsonwebtoken
   */

		/**
   * @apiDefine Success
   * @apiSuccess {Object} meta 状态描述
   * @apiSuccess {Number} meta.code 标识码，0表示成功，1表示失败
   * @apiSuccess {String} meta.message 标识信息
   * @apiSuccess {Object} data 数据内容
   */

		/**
   * @api {get} /help 列出所有资源
   * @apiDescription 列出所有资源
   * @apiName getAll
   * @apiGroup help
   * 
   * @apiParam {String} [page=1] 指定第几页
   * @apiParam {String} [limit=10] 指定每页的记录数
   *
   * @apiPermission none
   * @apiSampleRequest /help
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": [{
   *       	"_id": "_id",
   *       	"title": "title",
   *       	"content": "content",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }]
   *     }
   */

	}, {
		key: 'getAll',
		value: function getAll(req, res, next) {
			var query = {};

			var fields = {};

			var options = {
				page: req.query.page,
				limit: req.query.limit
			};

			Promise.all([this.model.countAsync(query), this.model.getAll(query, fields, options)]).then(function (docs) {
				res.tools.setJson(0, '调用成功', {
					items: docs[1],
					paginate: new res.paginate(Number(options.page), Number(options.limit), docs[0]).item
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /help/:id 获取某个指定资源的信息
   * @apiDescription 获取某个指定资源的信息
   * @apiName get
   * @apiGroup help
   *
   * @apiParam {String} id 资源ID
   *
   * @apiPermission none
   * @apiSampleRequest /help/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"title": "title",
   *       	"content": "content",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'get',
		value: function get(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var fields = {};

			this.model.get(query, fields).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /help 新建一个资源
   * @apiDescription 新建一个资源
   * @apiName post
   * @apiGroup help
   *
   * @apiParam {String} title 标题
   * @apiParam {String} content 内容
   *
   * @apiPermission none
   * @apiSampleRequest /help
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "新增成功"
   *       },
   *       "data": {
   *       	"_id": "_id"
   *       }
   *     }
   */

	}, {
		key: 'post',
		value: function post(req, res, next) {
			var body = {
				title: req.body.title,
				content: req.body.content
			};

			this.model.post(body).then(function (doc) {
				return res.tools.setJson(0, '新增成功', { _id: doc._id });
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {put} /help/:id 更新某个指定资源的信息
   * @apiDescription 更新某个指定资源的信息
   * @apiName put
   * @apiGroup help
   *
   * @apiParam {String} id 资源ID
   * @apiParam {String} [title] 标题
   * @apiParam {String} [content] 内容
   *
   * @apiPermission none
   * @apiSampleRequest /help/:id
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {
   *       	"_id": "_id",
   *       	"title": "title",
   *       	"content": "content",
   *       	"create_at": "create_at",
   *       	"update_at": "update_at"
   *       }
   *     }
   */

	}, {
		key: 'put',
		value: function put(req, res, next) {
			var query = {
				_id: req.params.id
			};

			var body = {
				title: req.body.title,
				content: req.body.content
			};

			this.model.put(query, body).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {delete} /help/:id 删除某个指定资源
   * @apiDescription 删除某个指定资源
   * @apiName delete
   * @apiGroup help
   *
   * @apiParam {String} id 资源ID
   * @apiSampleRequest /help/:id
   * 
   * @apiPermission none
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "删除成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'delete',
		value: function _delete(req, res, next) {
			var query = {
				_id: req.params.id
			};

			this.model.delete(query).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '资源不存在或已删除');
				return res.tools.setJson(0, '删除成功');
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = __webpack_require__(12);

var _request2 = _interopRequireDefault(_request);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _jwtauth = __webpack_require__(7);

var _jwtauth2 = _interopRequireDefault(_jwtauth);

var _proxy = __webpack_require__(1);

var _proxy2 = _interopRequireDefault(_proxy);

var _jwtauth3 = __webpack_require__(9);

var _jwtauth4 = _interopRequireDefault(_jwtauth3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ctrl = function () {
	function Ctrl(app) {
		_classCallCheck(this, Ctrl);

		Object.assign(this, {
			app: app,
			model: _proxy2.default.user
		});

		this.init();
	}

	/**
  * 初始化
  */


	_createClass(Ctrl, [{
		key: 'init',
		value: function init() {
			this.routes();
			this.initSuperAdmin();
		}

		/**
   * 注册路由
   */

	}, {
		key: 'routes',
		value: function routes() {
			this.app.post('/api/user/wechat/sign/up', this.wechatSignUp.bind(this));
			this.app.post('/api/user/wechat/sign/in', this.wechatSignIn.bind(this));
			this.app.post('/api/user/sign/up', this.signUp.bind(this));
			this.app.post('/api/user/sign/in', this.signIn.bind(this));
			this.app.post('/api/user/sign/out', this.signOut.bind(this));
			this.app.post('/api/user/reset/password', this.resetPassword.bind(this));
			this.app.post('/api/user/info', this.saveInfo.bind(this));
			this.app.get('/api/user/info', this.getInfo.bind(this));
		}

		/**
   * 封装request请求
   */

	}, {
		key: 'requestAsync',
		value: function requestAsync(url) {
			return new Promise(function (reslove, reject) {
				(0, _request2.default)({ url: url }, function (err, res, body) {
					if (err) return reject(err);
					return reslove(body);
				});
			});
		}

		/**
   * code 换取 session_key
   */

	}, {
		key: 'getSessionKey',
		value: function getSessionKey(code) {
			var appid = _config2.default.wechat.appid;
			var secret = _config2.default.wechat.secret;
			var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code';
			return this.requestAsync(url);
		}

		/**
   * @api {post} /user/wechat/sign/up 微信用户注册
   * @apiDescription 微信用户注册
   * @apiName wechatSignUp
   * @apiGroup user
   *
   * @apiParam {String} code 登录凭证
   *
   * @apiPermission none
   * @apiSampleRequest /user/wechat/sign/up
   * 
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "注册成功"
   *       },
   *       "data": {
   *       	"token": "token"
   *       }
   *     }
   */

	}, {
		key: 'wechatSignUp',
		value: function wechatSignUp(req, res, next) {
			var _this = this;

			var code = req.body.code;
			var body = {
				username: null,
				password: res.jwt.setMd5('123456')
			};

			this.getSessionKey(code).then(function (doc) {
				doc = JSON.parse(doc);
				if (doc && doc.errmsg) return res.tools.setJson(doc.errcode, doc.errmsg);
				if (doc && doc.openid) {
					body.username = doc.openid;
					return _this.model.findByName(doc.openid);
				}
			}).then(function (doc) {
				if (!doc) return _this.model.newAndSave(body);
				if (doc && doc._id) return res.tools.setJson(1, '用户名已存在');
			}).then(function (doc) {
				if (doc && doc._id) return res.tools.setJson(0, '注册成功', {
					token: res.jwt.setToken(doc._id)
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /user/wechat/sign/in 微信用户登录
   * @apiDescription 微信用户登录
   * @apiName wechatSignIn
   * @apiGroup user
   *
   * @apiParam {String} code 登录凭证
   *
   * @apiPermission none
   * @apiSampleRequest /user/wechat/sign/in
   * 
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "登录成功"
   *       },
   *       "data": {
   *       	"token": "token"
   *       }
   *     }
   */

	}, {
		key: 'wechatSignIn',
		value: function wechatSignIn(req, res, next) {
			var _this2 = this;

			var code = req.body.code;

			this.getSessionKey(code).then(function (doc) {
				doc = JSON.parse(doc);
				if (doc && doc.errmsg) return res.tools.setJson(doc.errcode, doc.errmsg);
				if (doc && doc.openid) return _this2.model.findByName(doc.openid);
			}).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '用户名不存在');
				if (doc && doc._id) return res.tools.setJson(0, '登录成功', {
					token: res.jwt.setToken(doc._id)
				});
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * 创建超级管理员
   */

	}, {
		key: 'initSuperAdmin',
		value: function initSuperAdmin(req, res, next) {
			var _this3 = this;

			var username = _config2.default.superAdmin.username;
			var password = _config2.default.superAdmin.password;

			this.model.findByName(username).then(function (doc) {
				if (!doc) return _this3.model.newAndSave({
					username: username,
					password: _jwtauth2.default.setMd5(password)
				});
			});
		}

		/**
   * @api {post} /user/sign/up 用户注册
   * @apiDescription 用户注册
   * @apiName signUp
   * @apiGroup user
   *
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   *
   * @apiPermission none
   * @apiSampleRequest /user/sign/up
   * 
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "注册成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'signUp',
		value: function signUp(req, res, next) {
			var _this4 = this;

			var username = req.body.username;
			var password = req.body.password;

			if (!username || !password) return res.tools.setJson(1, '用户名或密码错误');

			this.model.findByName(username).then(function (doc) {
				if (!doc) return _this4.model.newAndSave({
					username: username,
					password: res.jwt.setMd5(password)
				});
				return res.tools.setJson(1, '用户名已存在');
			}).then(function (doc) {
				return res.tools.setJson(0, '注册成功');
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /user/sign/in 用户登录
   * @apiDescription 用户登录
   * @apiName signIn
   * @apiGroup user
   *
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   *
   * @apiPermission none
   * @apiSampleRequest /user/sign/in
   * 
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "登录成功"
   *       },
   *       "data": {
   *       	"token": "token"
   *       }
   *     }
   */

	}, {
		key: 'signIn',
		value: function signIn(req, res, next) {
			var username = req.body.username;
			var password = req.body.password;

			if (!username || !password) return res.tools.setJson(1, '用户名或密码错误');
			if (req.body.code !== req.session.code) return res.tools.setJson(1, '验证码错误');

			this.model.model.getAuthenticated(username, password).then(function (doc) {
				switch (doc) {
					case 0:
						res.tools.setJson(1, '用户名或密码错误');
						break;
					case 1:
						res.tools.setJson(1, '用户名或密码错误');
						break;
					case 2:
						res.tools.setJson(1, '账号已被锁定，请等待两小时解锁后重新尝试登录');
						break;
					default:
						res.tools.setJson(0, '登录成功', {
							token: res.jwt.setToken(doc._id)
						});
				}
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {post} /user/sign/out 用户登出
   * @apiDescription 用户登出
   * @apiName signOut
   * @apiGroup user
   *
   * @apiPermission none
   * @apiSampleRequest /user/sign/out
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "登出成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'signOut',
		value: function signOut(req, res, next) {
			if (req.user) {
				new _jwtauth4.default().expireToken(req.headers);
				delete req.user;
				delete this.app.locals.token;
				return res.tools.setJson(0, '登出成功');
			}
			return res.tools.setJson(1, '登出失败');
		}

		/**
   * @api {post} /user/reset/password 修改密码
   * @apiDescription 修改密码
   * @apiName resetPassword
   * @apiGroup user
   *
   * @apiParam {String} oldpwd 旧密码
   * @apiParam {String} newpwd 新密码
   * 
   * @apiPermission none
   * @apiSampleRequest /user/reset/password
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": null
   *     }
   */

	}, {
		key: 'resetPassword',
		value: function resetPassword(req, res, next) {
			var oldpwd = req.body.oldpwd;
			var newpwd = req.body.newpwd;

			if (oldpwd && newpwd) {
				this.model.findByName(req.user.username).then(function (doc) {
					if (!doc) return res.tools.setJson(1, '用户不存在或已删除');
					if (doc.password !== res.jwt.setMd5(oldpwd)) return res.tools.setJson(1, '密码错误');
					doc.password = res.jwt.setMd5(newpwd);
					return doc.save();
				}).then(function (doc) {
					return res.tools.setJson(0, '更新成功');
				}).catch(function (err) {
					return next(err);
				});
			}
		}

		/**
   * @api {post} /user/info 保存用户信息
   * @apiDescription 保存用户信息
   * @apiName saveInfo
   * @apiGroup user
   *
   * @apiParam {Date} birthday 生日
   * @apiParam {String} email 邮箱
   * @apiParam {String} gender 性别
   * @apiParam {String} avatar 头像
   * @apiParam {String} nickname 昵称
   * @apiParam {String} tel 手机
   * 
   * @apiPermission none
   * @apiSampleRequest /user/info
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "更新成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'saveInfo',
		value: function saveInfo(req, res, next) {
			this.model.findByName(req.user.username).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '用户不存在或已删除');

				for (var key in req.body) {
					doc[key] = req.body[key];
				}

				doc.update_at = Date.now();

				return doc.save();
			}).then(function (doc) {
				return res.tools.setJson(0, '更新成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}

		/**
   * @api {get} /user/info 获取用户信息
   * @apiDescription 获取用户信息
   * @apiName getInfo
   * @apiGroup user
   * 
   * @apiPermission none
   * @apiSampleRequest /user/info
   * 
   * @apiUse Header
   * @apiUse Success
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "meta": {
   *       	"code": 0,
   *       	"message": "调用成功"
   *       },
   *       "data": {}
   *     }
   */

	}, {
		key: 'getInfo',
		value: function getInfo(req, res, next) {
			this.model.findByName(req.user.username).then(function (doc) {
				if (!doc) return res.tools.setJson(1, '用户不存在或已删除');
				return res.tools.setJson(0, '调用成功', doc);
			}).catch(function (err) {
				return next(err);
			});
		}
	}]);

	return Ctrl;
}();

exports.default = Ctrl;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map