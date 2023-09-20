// this

// console.log(this)
//"use strict"
// function a (){
//     console.log(this)
// }
//
// a()

// function foo () {
//     function a () {
//         console.log(this)
//     }
//     a()
// }
//
// foo()


// const user = {
//     name: 'Samurai',
//     getName: () => {
//         console.log(this.name)
//     }
// }
//
// user.getName()

// const car_1 = {
//     color: 'red',
// }
//
// const car_2 = {
//     color: 'black',
// }
//
// function f() {
//     console.log(this.color)
// }
//
// car_1.f = f
// car_2.f = f
//
// car_1.f()
// car_2.f()

// const car_1 = {
//     color: 'red',
//     showColor() {
//         console.log(this.color)
//     }
// }
//
// const f = car_1.showColor
// f()

// const car_1 = {
//     color: 'red',
//     showColor(a, b) {
//         console.log(`${this.color} ${a + b}`)
//     }
// }
//
// const car_3 = {
//     color: 'black',
// }
//
// car_1.showColor.call(car_3, 1, 2)

// const car_1 = {
//     color: 'red',
//     showColor(a, b) {
//         console.log(this.color)
//         console.log(a, b)
//     }
// }
//
// const car_3 = {
//     color: 'black',
// }
//
// car_1.showColor.call(car_3, 1, 2) // black
// car_1.showColor.apply(car_3, [1, 2]) // black // можно использовать методы массива
// car_1.showColor.bind(car_3)() // black

// ________________________________________________Разница call apply___________________________________________________

// const car_1 = {
//     color: 'red',
//     showColor(a, b) {
//         console.log(this.color)
//         console.log(a, b)
//     }
// }
//
// const car_3 = {
//     color: 'black',
// }
//
// car_1.showColor.call(car_3, 1, 2) // black 1 2
// car_1.showColor.apply(car_3, [1, 2]) // black 1 2// можно использовать методы массива
// car_1.showColor.bind(car_3, 1, 2)() // black 1 2

// разница в передаче доп параметров

// ________________________________________________Разница call apply___________________________________________________

// const scooter = {
//     maxSpeed: 60
// }
//
// const bike = {
//     maxSpeed: 300
// }
//
// const car_4 = {
//     maxSpeed: 200,
//     showMaxSpeed() {
//         console.log(this.maxSpeed)
//     }
// }
//
// car_4.showMaxSpeed() // 200 потому что стрелочной функции нельзя привязать контекст
// car_4.showMaxSpeed.call(scooter) // 60
// car_4.showMaxSpeed.bind(scooter).call(bike) // 60 потому что контекст можно перевязать 1 раз
// car_4.showMaxSpeed.apply(scooter).bind(bike) // ошибка на месте apply результат вызова функции у нее нельзя взять bind

function Car(color, speed, numberOfWheels) {
    this.color = color
    this.speed = speed
    this.numberOfWheels = numberOfWheels
}

const ferrari = new Car('Red', 300, 4)
const bmw = new Car('Black', 200, 4)

console.log(ferrari) // Car {color: 'Red'}
console.log(bmw) // Car {color: 'Black'}

/*
мы получили два разных объекта потому что this внутри функции конструктора всегда возвращает новый объект
function Car(color) {
    this.color = color
    return this
} и поэтому после вызова console.log(bmw) записывается новый объект
функция конструктор возвращает новый объект
 */
//
// const car = {
//     color: 'red',
//     shoColor() {
//         console.log(this.color)
//     }
// }
//
// setTimeout(function () {
//     car.shoColor()
// }, 1000)

// const car = {
//     color: 'red',
//     shoColor() {
//         console.log(this.color)
//     }
// }
// var color = 'black'
// setTimeout(car.shoColor, 1000) // black так как this будет браться из глобального контекста

/*
const setTimeout (callback, time) {
    // time
    callback()
} то есть после прошествия времени функция setTimeout просто вызывает переданный в нее callback
*/

// чтобы this брать из контекста объекта car нужно

// const car_2 = {
//     color: 'red',
//     shoColor() {
//         console.log(this.color)
//     }
// }
// setTimeout(() => car_2.shoColor(), 1000) // red
// setTimeout(car_2.shoColor.bind(car_2), 1000) // red

/*
console.log(car_2.shoColor.bind(car_2))

ƒ shoColor() {
        console.log(this.color)
    }
 */

let axios = {
    get() {
        const pr = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 1000)
        })
        return pr
    }
}

axios.get()
    .then(data => console.log(data))
    .then(() => {console.log(2)})
    .then(() => {console.log(3)})
    .catch(data => console.error(data))

//______________________________________________________________________________________________________________________
// const a = {
//     sum(a,b) {
//         console.log(a + b)
//         return this
//     }
// }
//
// a.sum(1,2)
//  .sum(3,4)
//  .sum(5,6)
//______________________________________________________________________________________________________________________

// const a = {
//     result: 0,
//     sum(a) {
//         this.result += a
//         return this
//     },
//     minus(a) {
//         this.result -= a
//         return this
//     },
//     multiply(a) {
//         this.result *= a
//         return this
//     }
// }
//
// a.sum(1)
// .sum(1)
// .minus(1)
// .multiply(2)
// console.log(a.result)




