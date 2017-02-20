
module.exports = {
    /**
     * 附件上传
     * @param data
     * @param callback
     * @returns {*}
     */
    upload: function(data, callback) {
        var formData = new FormData();
        // 这里根据接口而定
        formData.append('original_filename', data.name);
        formData.append('upload_file', data);
        data.ajax = Forms.post({
            api: Config.SITE_URL.ATTACHMENT,
            uri: '/message/upload?ref_id=' + Config.CHANNEL + '&ref_type=' + Config.MESSAGE.REFTYPE.LIVE,
            params: formData,
            processData: false,
            xhr: function() {
                myXHR = $.ajaxSettings.xhr();
                if (myXHR.upload) data.upload = myXHR.upload;
                if (typeof(data.getXHR) == 'function') {
                    //进度条回调
                    data.getXHR(myXHR);
                }
                return myXHR;
            }.bind(this),
            callback: function(result) {
                typeof(callback) == "function" && callback(result);
            }.bind(this)
        });
        return data.ajax;
    },
    /**
     *把paste的文件转换为正常流
     * @param transfers 为: e.originalEvent.clipboardData.items  on('paste', function(e) {})
     * @returns {*}
     */
    transfersToFiles: function(transfers) {
        if (!transfers || transfers.length == 0) return false;
        var result = {length: 0};
        var time = Utils.formatDate(new Date, 'YYYY-MM-DD HH:mm:SS');
        for (var i = 0; i < transfers.length; i++) {
            var item = transfers[i];
            if (item.kind == 'file') {
                var blob = item.getAsFile();
                var filename = blob.name || '粘帖上传- ' + time + ' ' + i + '.' + blob.type.split('/')[1];
                var file = new File([blob], filename, {type: blob.type});
                if (file.size == 0) continue;
                result[result.length] = file;
                result.length++;
            }
        }
        if (result.length == 0) return false;
        return result;
    }
};