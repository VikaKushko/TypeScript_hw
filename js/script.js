class EventManager {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        (this.events[event] ||= []).push(callback);
    }

    off(event, callback) {
        this.events[event] = (this.events[event] || []).filter(cb => cb !== callback);
    }

    trigger(event, ...args) {
        (this.events[event] || []).forEach(cb => cb(...args));
    }
}

const message = new EventManager();

const greet = (name) => console.log(`Hello ${name}`);
message.on('greet', greet);
message.trigger('greet', 'Vika');
message.off('greet', greet);
message.trigger('greet', 'Kate');
