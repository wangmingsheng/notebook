module.exports = {
	/**
	 *
	 * @param obj dom对象
	 * @param callback
	 * @returns {boolean}
	 */
	restrict: function(obj, callback) {
		var output = {};
		var dataType = obj.getAttribute('data-type');
		var name = obj.getAttribute('name');
		if (name) {
			if (obj.value.length && $.inArray(dataType, ['number', 'mobile', 'zip']) != -1) {
				if (!Utils.RegexList['number'].test(obj.value)) {
					return false;
				}
			}
			output[name] = obj.value;
		}

		if (typeof(callback) == 'function') {
			callback(output);
		}
	},
	/**
	 * 某个容器下的表单元素进行序列号
	 * @param objControl jquery对象
	 * @returns {{}}
	 */
	serialize: function(objControl) {
		var params = objControl.find('input,select,textarea').serializeArray();
		var output = {};
		for (var i in params) {
			if (params[i].name) {
				if ($.isArray(output[params[i].name])) {
					output[params[i].name].push(params[i].value);
				} else if (typeof(output[params[i].name]) == 'string') {
					var _value = output[params[i].name]
					output[params[i].name] = [_value];
					output[params[i].name].push(params[i].value);
				} else {
					output[params[i].name] = params[i].value;
				}
			}
		}
		return output;
	},
	/**
	 * 表单验证
	 * @param objControl
	 * @returns {boolean}
	 */
	verify: function(objControl) {
		var result = true;
		objControl.find('input,textarea,select').each(function (i, obj) {
			var dataType = obj.getAttribute('data-type');
			var required = obj.getAttribute('required');
			var compare = obj.getAttribute('data-compare');
			
			if (obj.value.length == 0) {
				if (required != null) {
					$(obj).addClass('error');
					result = false;
					return false;
				}
			} else if (dataType && Utils.RegexList[dataType]) {
				if (!Utils.RegexList[dataType].test(obj.value)) {
					$(obj).addClass('error');
					result = false;
					return false;
				}
			}

			if (compare) {
				var that = objControl.find('[name="' + compare + '"]');
				if (obj.value != that.val()) {
					that.addClass('error');
					result = false;
					return false;
				}
			}
		});
		return result;
	},
	/**
	 * Ajax 提交
	 * @param data
	 * @returns {*}
	 */
	submit: function(data) {
		var uri = data.uri || '';
		var method = data.method || 'GET';
			method = method.toUpperCase();
		var self = this;
		var params = '';
		if (data.params) {
			if (method == 'GET' || (window.FormData && data.params instanceof window.FormData)) {
				params = data.params;
			} else {
				params = JSON.stringify(data.params);
			}
		}

		var _url;
		if (data.realUri) {
			_url = uri;
		} else {
			_url = (data.api || Config.SITE_URL.API) + uri;
		}

		if (Config.ACCESS_TOKEN) _url += _url.indexOf('?') == -1 ? '?access_token=' + Config.ACCESS_TOKEN : '&access_token=' +  Config.ACCESS_TOKEN;

		var request = {
			url: _url,
			data: params,
			type: method,
			dataType: 'JSON',
			processData: typeof(data.processData) == 'undefined' ? true : data.processData,
			contentType: false,
			beforeSend: function(xhr) {
				typeof(data.beforeSend) == 'function' && data.beforeSend(xhr);
				if (data.header) {
					/// Access-Token
					xhr.setRequestHeader(data.header.name, data.header.value);
				}
				if (data.button) {
					$(data.button).prop('disabled', true);
				}
			},
			success: function(result, fnType, xhr) {
				switch (result.code) {
					case 200:
					break;
					case 401:
						if (!Config.REFRESHING) {
							Event.trigger('Relogin', function(loginStatus) {
								if (loginStatus.code = 200) {
									Config.REFRESHING = false;
									self.submit(data);
								}
							});
						}
					break;
					case 40018:
					case 403:
						//window.location.href = '/elect.html?code=' + result.code;
					break;
					default:
					break;
				}

				if (data.header) {
					data.callback(result, xhr.getResponseHeader(data.header.name));
				} else {
					data.callback(result);
				}
			},
			error: function(xhr) {
				if (data.offError !== true && xhr.statusText != 'abort') {

				}
				data.callback({code: 4000, xhr: xhr});
			},
			complete: function() {
				if (data.button) {
					$(data.button).prop('disabled', false);
				}
			}
		};


	/*	if (window.FormData && data.params instanceof window.FormData) {
			request.contentType = false;
		}

		if (data.crossDomain) {
			request.contentType = false;
			request.xhrFields = {
				withCredentials: true
			};
		}*/

		if (typeof(data.xhr) == 'function') request.xhr = data.xhr;
		return $.ajax(request);
	},
	get: function(data) {
		data.method = 'GET';
		return this.submit(data);
	},
	post: function(data) {
		data.method = 'POST';
		return this.submit(data);
	},
	put: function(data) {
		data.method = 'PUT';
		return this.submit(data);
	}
};

module.exports['delete'] = function(data) {
	data.method = 'DELETE';
	return this.submit(data);
}