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