function Event() {
    this.eventList = {};
}

Event.prototype = {
    on: function(eventType, func) {
        if (!this.eventList[eventType]) this.eventList[eventType] = [];
        this.eventList[eventType].push(func);
    },

    off: function(eventType, func) {
        if (!this.eventList[eventType]) return;
        if (!func) return delete this.eventList[eventType];

        for (var i = this.eventList[eventType].length - 1; i >= 0; i--) {
            if (this.eventList[eventType][i] == func) this.eventList[eventType].splice(i, 1);
        }
    },

    trigger: function(eventType, data) {
        if (!this.eventList[eventType]) return;
        var data = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < this.eventList[eventType].length; i++) {
            this.eventList[eventType][i].apply(null, data);
        }
    }
};

module.exports = new Event;


//简单的事件监听应该这么写
function handleEvent (eventName, {onElement, withCallback, useCapture = false} = {}, thisArg) {
    const element = onElement || document.documentElement

    function handler (event) {
        if (typeof withCallback === 'function') {
            withCallback.call(thisArg, event)
        }
    }

    handler.destroy = function () {
        return element.removeEventListener(eventName, handler, useCapture)
    }

    element.addEventListener(eventName, handler, useCapture)
    return handler
}

// 你需要的时候
const handleClick = handleEvent('click', {
        onElement: element,
        withCallback: function (event) {
            console.log('');
        }
});

// 你想删除它的时候
handleClick.destroy();