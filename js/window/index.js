
module.exports = {
  //storage
    myStorage: function() {
        //永久的 同一个域名下不同窗口都能访问 （不同类型的浏览器之间不行）
        localStorage.setItem(key, value);
        localStorage.removeItem(key);
        localStorage.clear();

        //sessionStorage数据获取时的页面会话结束清除
        //只要浏览器打开，页面会话持续，并且在页面重新加载和恢复后仍然存在
        //在新标签或窗口打开页面将导致启动一个新的会话，从会话cookie是如何工作的不同。
        sessionStorage.setItem(key, value);
        sessionStorage.removeItem(key);
        sessionStorage.clear();
    }
};