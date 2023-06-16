// observable == publisher/subscriber

// store.subscribe(function subscriber(){}) // изменение стейта
// button.addEventListener('click', function subscriber(){}) // произошел клик
// promise.then('click', function subscriber(){}) // промис зарезолвился
// setTimeout(function subscriber(){}, 1000) // прошла секунда

// <CustomButton onClick={() => {}}>

const store = {
    _subscribers: [],
    dispatch() {
        // change store
        this._subscribers.forEach(s => s())
    },
    subscribe(subscriber) {
        this._subscribers.push(subscriber)
    }
}

const button = {
    _subscribers: {
        'click': [],
        'focus': []
    },
    click() {
        this._subscribers['click'].forEach(s => s())
    },
    focus() {

    },
    addEventListener(eventName, subscriber) {
        this._subscribers[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(s => s !== subscriber)
    }
}

const console = () => {
    console.log('click')
}

button.addEventListener('click', console)
button.removeEventListener('click', console)
button.addEventListener('click', () => alert())

