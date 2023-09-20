// function outerFunction(x) {
//     return function innerFunction(y, z) {
//         return x + y + z
//     }
// }
//
// const add5 = outerFunction(5)
// // add5(3) = function innerFunction(y) {
// //     return 5 + y
// // }
// console.log(add5(3, 6)) // 8
// _____________________________________________________________________________________________________________________
// let car;
// car = 'bmv'
//
// function startCarEnging() {
//     let enging = 'Start';
//     return () => {
//         console.log(`${enging} ${car}`)
//     };
// }
//
// startCarEnging()()
// _____________________________________________________________________________________________________________________
// function startCarEnging() {
//     let enging = 'Start';
//     return () => {
//         console.log(`${enging} ${car}`)
//     };
// }
//
// const drive = startCarEnging();
// drive();
// _________________________Пример для замыкания________________________________________________________________________
//
// const counter = () => {
//     let count = 1
//     return () => {
//         console.log(count++)
//     }
// }
//
// counter()




// _____________________________________________________________________________________________________________________

// const createCounter = () => {
//     let count = 1;
//     return {
//         increment() {
//             count++
//         },
//         getCounter() {
//             return count
//         }
//     }
// }
//
// const counter1 = createCounter()
//
// counter1.increment()
//
// console.log(counter1.getCounter()) // 2 почему ?

// _____________________________________________________________________________________________________________________

// const createCounter = () => {
//     let count = 1;
//     return {
//         increment() {
//             count++
//         },
//         getCounter() {
//             return count
//         }
//     }
// }
//
// const counter1 = createCounter()
//
// counter1.increment()
// console.log('----')
// console.log(counter1.getCounter()) // 11

// _____________________________________________________________________________________________________________________

// const counter = () => {
//     let count = 1;
//     return () => {
//         return ++count
//     }
// }
//
// const counter22 = counter()
//
// console.log(counter22()) // 1 or 2
// console.log(counter22()) // 2 or 3

// _____________________________________________________________________________________________________________________

// const thunkCreator = (id) => {
//     const thunk = (dispatch, state) => {
//         console.log(fetch(`https://google.com/${id}`))
//     }
//     return thunk
// }
//
// const thunk1 = thunkCreator(1)
// const thunk2 = thunkCreator(2)
//
// thunk1()

// _____________________________________________________________________________________________________________________

// Карирование

// const sum = (a) => (b) => (c) => a + b + c;

// function sum (a) {
//     return function(b = 0) {
//         return function(c = 0) {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(1)()()) // 1

// Рекурсия

// function a () {
//     b(c())
// }
// function b () {}
// function c () {}
//
// a() формируется стэк вызовов функция а не может завершить выполнение пока не выполнится функция b
// функция b не может завершить выполнение пока не выполнится функция c
// функция c может завершить выполнение и после завершения функция c удаляется из стека
// и теперь функция b может выполниться and b выполняется после выполнения функции b выполняется функция a
// и после этого очищается стэк

// // ___________________________________Пример рекурсии с возведением в степень___________________________________________
//
// const pow = (x, n) => {
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
//
// console.log(pow(3, 3)) // 27

// самый главный нюанс рекурсии что у нас должно быть выполнено условие выхода из рекурсии чтобы
// рекурсия не вошла в бесконечный цикл и не переполнился стэк вызовов ()
// когда if (n === 1) {} - нет смысла этой функции вызывать саму себя потому что степени меньше 1 не может быть
/*
const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow()
    }
} - функция может вызвать себя так как она найдет сама себя по замыканию в своей же lexical environment
но в момент вызова мы должны уменьшить n на шаг рекурсии pow(x, n - 1)
 */

/*
LE создается в момент выполнения функции
если данные из функции кто-то продолжает использовать после ее вызова то функция после отработки не будет удаляться
сборщиком мусора

2 главные фишки замыкания
способность функции выйти по ссылке своего лексического окружения в лексическое окружение родителя для поиска отсутствующего значения
не удаление из лексического окружения переменных с значениями в случае если какая-либо сущность извне ссылается на данные из
лексического окружения этой функции
 */


// _________________________________Пример замыкания____________________________________________________________________

// const counter = () => { // {count: 2, this, some}
//
//     let count = 1
//
//     return () => { // {this, some}
//         console.log(++count)
//     }
// }
//
// let counter_1 = counter()
// let counter_2 = counter()
//
// counter_1() // count = 2
// counter_1()
//
// counter_2()
// counter_2()



// ___________________________________Пример рекурсии с возведением в степень___________________________________________

/*
// стэк вызова

 */


const step = (x, n) => {
    if (n === 1) { // условие выхода
        return x
    } else {
        return 27 // шаг рекурсии
    }
}

console.log(step(3, 3)) // 27

console.log(typeof null)



// ________________________________________________ new Version

/*
Замыкание
lexical environment

есть глобальный объект который формируется на уровне скрипта
этот объект формируется в начале выполнения кода
и в него будут записываться все переменные которые создаются на уровне скрипта
{
    x: "10",
    car: 'bmv'
}

то есть переменные создаются не в функции а на уровне скрипта

когда мы запускаем наш код формируется глобальный объект

const globalLexicalEnvironment = {
    environmentRecords: {
        // сюда будут записываться переменные
    },
    outer: здесь содержится ссылка на внешнее лексическое окружение для глобального лексического окружения = null
}
 */


// let x = 10;
//
// function some() {
//     console.log(x)
// }
//
// some()
//
// (function () {
//     let x = 20
//     some()
// })()
//
// (function (innerFunc) {
//     let x = 30
//     innerFunc()
// })(some)

// 10 20 30 10 10 10?

// let car = 'bmv' // globalLE {car: 'bmv'} -> null
//
// const startEngine = () => { // globalLE {car: 'bmv', startEngine: function} -> null
//     // startEngine`LE {
//     //       car: 'kia'
//     //     }
//     const car = 'kia'
//     console.log('Start ' + car)
// }
// for (let i = 0; i < 0; i++) {
//     const car = 0; // не конфликтует с предыдущей car потому что находится в другом объекте лексического окружения
// }
//
// car = 'audi'
// startEngine()

const globalLexicalEnvironment = {
    environmentRecords: {
        // сюда будут записываться переменные
    },
    outer: null //здесь содержится ссылка на внешнее лексическое окружение для глобального лексического окружения = null
}

// объекты лексического окружения создаются на каждом блоке кода функции циклы if else и т.д. for while
// единственное исключение при создании которого не создается лексического окружения это объекты

/*
если объявлять переменную через let или const то такие переменные не подлжат hosting
но если мы объявим через var то такая переменная будет подлежать hosting
функции объявленные с помощью function declaration то есть черезе function тоже подлежат hosting
функции объявленные через function expression то есть есть знак равно не подлежат хостингу

hosting это способность вызова сущности до ее объявление в коде
вызывается из объекта лексического окружение так как проходит по коду 2 раза
1 раз регистрирует в объект лексического окружения 2 раз выполняет
 */

// globalLE {foo: function, b: undefined} -> null || {}
// console.log(a) // cannot access
console.log(b) // undefined переменная появляется в LE при первом прочтении но у нее еще не появляется значение
foo()

let a = 1 // globalLE {foo: function, b: undefined, a: 1} -> null || {}
var b = 2 // globalLE {foo: function, b: 2, a: 1} -> null || {}

function foo() {

}

const bar = function() {} // var b = 2 // globalLE {foo: function, b: 2, a: 1, bar: function} -> null || {}

let start = 'start ' // globalLE {start: 'start '} -> null
// в момент вызова функции создается объект startEngineLE который содержит все переменные и ссылку на внешнее LE
// в самом начале в объект добавляется толко ссылка на LE родителя а уже затем построчно переменные
const startEngine = () => { // globalLE {start: 'start ', startEngine: function} -> null
    // [[Environment]] -> outer ссылка на внешнее лексическое окружение то есть на globalLE
    // startEngineLE {car: 'kia'} -> outer создается в момент вызова функции то есть на 336 строке
    const car = 'kia'
    console.log(start + car)
}

startEngine()  // startEngine`LE {car: 'kia'}

// _____________________________________________ классический пример замыкания счётчик

// 1 globalLE {} -> null

// const counterCreator = () => { // 2 globalLE {counterCreator: FN} -> null
//     // 3 [[Environment]] -> globalLE объект counterCreatorLE еще не создается потому что мы еще не вызвали нашу функцию
//     // 5 counterCreatorLE {count: 0} так как мы вызвали counterCreator создается объект внутреннего лексического
//     // окружения
//     let count = 0
//     return () => {
//         // когда мы выполняли return мы проинициализировали анонимную функцию и у нее тоже создается ссылка Env
//         // 6 [[Environment]] -> counterCreatorLE
//         // counterLE {} появляется и удаляется при вызове и сразу после вызова потому что ссылок на него нет
//         // поэтому когда let count = 0 то будет 1 1 1 потому что функция отрабатывает удаляется объект и заново
//         console.log(++count)
//     }
// }
//
// const counter = counterCreator() // 4 globalLE {counterCreator: FN, counter: FN} -> null
// counter() // выполняем функцию counter запускается анонимная функция из return и создается ее объект LE
//           // после отработки функции и вывода в консоль 1 объект counterLE удаляется потому что на него нет ссылок
//           // counterCreatorLE {count: 0} не удаляется потому что на него есть ссылка [[Environment]] -> counterCreatorLE
// counter() // когда вызываем функцию 2 раз counterCreatorLE {count: 1} поэтому выведется 2
// counter() // когда вызываем функцию 3 раз counterCreatorLE {count: 2} поэтому выведется 3


const counterCreator = () => {
    let count = 0
    return () => {
        console.log(++count)
    }
}

const counter_1 = counterCreator()
const counter_2 = counterCreator()

// при этих вызовах создастся один объект counterCreatorLE
counter_1()
counter_1()
counter_1()

// при этих вызовах создастся другой объект counterCreatorLE
counter_2()
counter_2()
counter_2()
// и так как переменная count будет находиться в каждом своя то увидим 1 2 3
// а если вынесем переменную в globalLE то переменная будет одна и та же и поэтому 1 2 3 4 5 6
// на каждый вызов функции создается свой объект лексического окружения
// count увеличивается потому что counter_1 и counter_2 находятся в globalLE
// и соответственно объект лексического окружения живет и не будет удаляться из памяти сборщиком мусора

// ____________________________________ рекурсия
// пример возведение числа в степень

// почему мы можем вызвать функцию внутри себя
// globalLE {pow:FN}
// const pow = (x, n) => {
//     // при вызове функции мы не найдем pow внутри powLE но пойдем выше через outer и найдем ее в globalLE
       // поэтмоу же мы можем вызывать одну функцию внутри другой функции либо внутри себя как в этом случае
//     if (n === 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
//
// console.log(pow(2,3))

const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow(2,3))

// _________________ стек

// const a = () => console.log(1)
// const b = () => a()
// const c = () => b()
// c()

// last in first out стопка тарелок положили и берем сверху
// в оперативной памяти выделяется один стэк для выполнения одного нашего скрипта
// вызовы функции ложатся отдельно на стэк в оперативной памяти

const factorial = (n) => {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))
// ___________________________________
// globalLE {}
let x = 10; // globalLE {x: 10}

function some() { // globalLE {x: 10, some: fn}
    // [[env]] -> globalLE
    // someLE{}
    console.log(x)
}

some();
// IIFE (Immediately Invoked Function Expression)
(function () {
    // LE{}
    let x = 20 // LE{x: 20}
    some() // будет смотреть на глобальный объект LE потому что some туда ссылается
})(); // так раньше работали когда не было let and const потому что var имеет функциональную область видимости

(function (inner) {
    // LE{inner: FN}
    let x = 30;  // LE{innner: FN, x: 30}
    inner() // будет смотреть на глобальный объект LE потому что some туда ссылается
})(some)

// все благодаря function some() { // globalLE {x: 10, some: fn}
//     // [[env]] -> globalLE  этой ссылке потому что она не меняется