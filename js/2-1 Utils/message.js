
module.exports = {
    formatToClient: function(str) {
        if (typeof(str) != 'string') return str;
        return str.replace(/\[([^\]]*)\]/g, function(result, $1) {
            var type = $1.substr(0, 1);
            var index = Config.EMOJI.indexOf($1);
            if (index == -1) return result;
            return '<img src="/assets/emojis/' + index + '.png" width="24" height="24" alt="[' + Config.EMOJI[index] + ']" class="ico_emoji"/>';
        });
    },
    formatToServer: function(str) {
        if (typeof(str) != 'string') return str;

        str = str.replace(/<img[^>]*alt="([^"]*)"[^>]*data-emoji="true"[^>]*>/g, function(result, $1) {
            return $1;
        });
        return str;
    },
    removeHTMLTag: function(str) {
        str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
        str = str.replace(/&nbsp;/ig,'');//去掉&nbsp;
        return str;
    }
};