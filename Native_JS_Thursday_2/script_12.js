
// const car_1 = {
//     brand: 'bmw',
//     maxSpeed: 200,
//     startEngine() {
//         console.log(`${this.brand}`)
//     }
// }
//
// const car_2 = {
//     brand: 'audi',
//     maxSpeed: 220,
//     startEngine() {
//         console.log(`${this.brand}`)
//     }
// }
//______________________________________________________________________________________________________________________
// function carCreator (name, speed) {
//     return {
//         brand: name,
//         maxSpeed: speed,
//         startEngine() {
//             console.log(`${this.brand} engine is started`)
//         }
//     }
// }
//
// const car_1 = carCreator('bmw', 200)
// const car_2 = carCreator('audi', 220)
//
// car_1.startEngine()
// car_2.startEngine()
//______________________________________________________________________________________________________________________
// function Car(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
// }
//
// Car.prototype.startEngine = function () {
//     console.log(`${this.brand} engine is started`)
// }
//
// const car_1 = new Car('bmw', 200)
// const car_2 = new Car('audi', 220)
//
// car_1.startEngine() // у car_1 нет startEngine в его прототипе но он будет искать этот метод у своего prototype
// car_2.startEngine()
//______________________________________________________________________________________________________________________

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     startEngine() {
//         console.log(`${this.brand} engine is started. max speed - ${this.maxSpeed}`)
//     }
// }
//
// const car_1 = new Car('bmw', 200)
// const car_2 = new Car('audi', 220)
//
// // car_1.startEngine() // у car_1 нет startEngine в его прототипе но он будет искать этот метод у своего prototype
// // car_2.startEngine()
// //
// // console.log(car_1) // Car {brand: 'bmw', maxSpeed: 200} - у него нет метода при этом метод работает
// // car_1.startEngine() // car_1.startEngine()
//
// setTimeout(car_1.startEngine, 1000) // не работает
// setTimeout(() => car_1.startEngine(), 1000) // работает
// setTimeout(car_1.startEngine.bind(car_1), 1000) // работает
//
// const newSetTimeOut = (cb) => {
//     () => car_1.startEngine() // this ссылается в момент вызова на то что слева от точки
//     cb() // слева от точки ничего нет поэтому при передаче обычного метода напрямую контекст теряется  setTimeout(car_1.startEngine, 1000)
// }

//______________________________________________________________________________________________________________________

// class Car {
//     #brand // приватное свойство, такое нельзя переопределить за пределами класса напрямую
//     // но мы можем это делать через функции set и get внутри класса
//     constructor(brand, maxSpeed) {
//         this.#brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     startEngine() {
//         console.log(`${this.#brand} engine is started. max speed - ${this.maxSpeed}`)
//     }
//     setBrand(newBrand) {
//         this.#brand = newBrand
//     }
// }
//
// const car_1 = new Car('bmw', 200)
// const car_2 = new Car('audi', 220)

// car_1.startEngine() // у car_1 нет startEngine в его прототипе но он будет искать этот метод у своего prototype
// car_2.startEngine()
//
// console.log(car_1) // Car {brand: 'bmw', maxSpeed: 200} - у него нет метода при этом метод работает
// car_1.startEngine() // car_1.startEngine()

// setTimeout(car_1.startEngine, 1000) // не работает
// setTimeout(() => car_1.startEngine(), 1000) // работает
// setTimeout(car_1.startEngine.bind(car_1), 1000) // работает
//
// const newSetTimeOut = (cb) => {
//     () => car_1.startEngine() // this ссылается в момент вызова на то что слева от точки
//     cb() // слева от точки ничего нет поэтому при передаче обычного метода напрямую контекст теряется  setTimeout(car_1.startEngine, 1000)
// }
//______________________________________________________________________________________________________________________
class Car {
    #brand // приватное свойство, такое нельзя переопределить за пределами класса напрямую
    // но мы можем это делать через функции set и get внутри класса
    constructor(brand, maxSpeed) {
        this.#brand = brand
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`${this.#brand} engine is started. max speed - ${this.maxSpeed}`)
    }
    setBrand(newBrand) {
        if (!newBrand) throw new Error('empty string')
        this.#brand = newBrand.toUpperCase()
    }
    getBrand() {
        return `${this.#brand} asdfasdf`
    }
    set Brand_trueSET(newBrand) {
        if (!newBrand) throw new Error('empty string')
        this.#brand = newBrand.toUpperCase()
    }
    get Brand_trueGET() {
        return `${this.#brand} asdfasdf`
    }
    static concatCars(car_1, car_2) { // есть только у самого класса а не его экземпляров

    }
}

const car_1 = new Car('bmw', 200)
const car_2 = new Car('audi', 220)

car_1.setBrand('toyota') // изменяем приватное свойство вне класса
    // это нужно чтобы добавить дополнительную логику в перезапись
    // или проверить новое значение для приватного свойства
car_1.startEngine() // toyota engine is started. max speed - 200
console.log(car_1.getBrand()) // TOYOTA asdfasdf

car_1.Brand_trueSET = 'vw' //     set Brand_trueSET('vw') {
// = - значит set если ничего get

console.log(car_1.Brand_trueGET) // VW asdfasdf

// статические методы это методы которые принадлежат самому классу а не его экземпляру
// Promise.all это статический метод класса promise он не доступен у экзмепляров