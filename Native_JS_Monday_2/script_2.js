/*
                                    Функции имитирующие работу методов массивов

Используем только циклы функции и if else

________________________________________________________________________________________________________________________
Исходные данные

const students = [
    {
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        name: 'Alex',
        age: 32,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        name: 'Nick',
        age: 21,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false,
    },
]

________________________________________________________________________________________________________________________

Задача - Сформировать массив имен этих студентов

1 действие создаем функцию getStudentsNames

const getStudentsNames = (array) => {

}

создаем новый массив для иммьютабельной работы с данными
и возращаем его из функции

const getStudentsNames = (array) => {
    const result = []

    return result
}

Пробегаемся циклом по массиву

const getStudentsNames = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].name
    }
    return result
}

console.log(getStudentsNames(students)) - (4) ['Bob', 'Alex', 'Nick', 'John']

________________________________________________________________________________________________________________________

Задача посчитать средний бал студентов scores

const getStudentsScores = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].scores
    }
    return result
}

console.log(getStudentsScores(students)) - (4) [85, 89, 120, 100]

Далее отдаем данные на обработу и находим между ними среднее

const getStudentsScores = (array) => {
    const result = []
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].scores
    }
    for (let k = 0; k < result.length; k++) {
        sum += result[k]
    }
    return sum/result.length

}

console.log(getStudentsScores(students)) - 98.5
________________________________________________________________________________________________________________________

Задача изменить статус студентов isStudent на true

const getStudents = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = {...array[i], isStudent: true}
    }
    return result
}

console.log(getStudents(students))

(4) [{…}, {…}, {…}, {…}]
0: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: true}
1: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: true}
2: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: true}
3: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: true}
length: 4

Подробнее о {...array[i], isStudent: true}

array[i] - элемент массива students
   {
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },

мы создаем новый литерал объекта
 result[i] = {}

внутрь нашего объекта помещаем все содержимое старого объекта
 result[i] = {...array[i]}

а свойство isStudent перезапишем на true
 result[i] = {...array[i], isStudent: true}

в ...array[i] isStudent был равен false но далее мы добавляем в наш новый литерал новую пару ключ значение
и так как в объекте ключи могут быть только уникальные то попытка добавить новый ключ просто затрет старое значение

result[i] - в начале цикла будет равно 0 так как  for (let i = 0; а далее будет увеличиваться на единицу
как и положено индексу в массиве пока не достигнет длины обрабатываемого в цикле массива students

Рефакторим код

const func = (obj) => obj.name             func(array[i])

const getStudentsNames = (array) => {
    const result = []
    const func = (obj) => obj.name
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

const getStudentsScores = (array) => {
    const result = []
    const func = (obj) => obj.scores
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    for (let k = 0; k < result.length; k++) {
        sum += result[k]
    }
    return sum/result.length

}

console.log(getStudentsScores(students))

const getStudents = (array) => {
    const result = []
    const func = (obj) => ({...obj, isStudent: true})
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getStudents(students))

И получаем почти одинаковые функции, поэтому
выносим функции наверх

const func_1 = (obj) => obj.name
const func_2 = (obj) => obj.scores
const func_3 = (obj) => ({...obj, isStudent: true})
const getStudentsNames = (array) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = func_1(array[i])
    }
    return result
}

console.log(getStudentsNames(students))

const getStudentsScores = (array) => {
    const result = []

    let sum = 0
    for (let i = 0; i < array.length; i++) {
        result[i] = func_2(array[i])
    }
    for (let k = 0; k < result.length; k++) {
        sum += result[k]
    }
    return sum/result.length

}

console.log(getStudentsScores(students))

const getStudents = (array) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = func_3(array[i])
    }
    return result
}

console.log(getStudents(students))

так как код выше одинаковый то мы пишем универсальную функцию вместо дублирования кода

const getMappedArray = (arr, func) => {
    функция будет получать массив и внешнюю функцию которая будет описывать что должно произойти с каждым элементом
    исходного массива
}

const getMappedArray = (arr, func) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

Теперь у нас есть одна общая функция которая в состоянии решать все наши задачи при условии
что мы отдельно будем описывать отдельные функции преобразования каждого элемента исходного массива

переименовываем функции

const getName = (obj) => obj.name
const getScores = (obj) => obj.scores
const getStudent = (obj) => ({...obj, isStudent: true})

Теперь если нам нужно получить массив имен мы пишем

console.log(getMappedArray(students, getName))  or
console.log(getMappedArray(students, (obj) => obj.name))  or можем передать литерал функции

Тип функции getName которую мы отдаем управляющему коду для последующего вызова называется callback

Итого, если бы мы использовали классический метод map мы бы взяли массив students перебирающую управляющую функцию map
а дальше в качестве callback передали бы или имя функции getName или литерал
чаще мы перадем литерал в привычном виде, но можно и передавать в виде имени функции callback

console.log(students.map((obj) => obj.name)) // (4) ['Bob', 'Alex', 'Nick', 'John']
console.log(students.map((getName))) // (4) ['Bob', 'Alex', 'Nick', 'John']

в консоли увидим 3 одинаковых результата

console.log(getMappedArray(students, getName))
console.log(getMappedArray(students, (obj) => obj.name))
console.log(students.map((obj) => obj.name)) // (4) ['Bob', 'Alex', 'Nick', 'John']

(4)['Bob', 'Alex', 'Nick', 'John']
(4)['Bob', 'Alex', 'Nick', 'John']
(4)['Bob', 'Alex', 'Nick', 'John']

const getMappedArray = (array, func) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
} - таким образом мы написали аналог метода map и узнали что у него лежит под капотом а именно

1 создание нового массива
    const result = []
2 перебор исходного массива
    for (let i = 0; i < array.length; i++) {

    }
3 вызов callback функции для каждого элемента исходного массива
    func(array[i])
4 запись результата вызова callback функции в результирующий массив
    result[i] = func(array[i])
5 возврат заполненного новыми значениями массива
    return result

Это то что всегда делает метод map а что именно должно произойти с каждым элементом исходного массива
    func(array[i])
Это мы описываем в callback функции которую передаем в качестве параметра

students.map((obj) => obj.name)

    управляющая функция   массив      и callback
    getMappedArray       (students,   getName)) - полифил метода map

в map

    массив      управляющая функция   и callback
    students    .map(                (obj) => obj.name))

Перепишем управляющую функцию таким образом чтобы сделать ее методом массива

const selfMadeMap = () => {
    const result = []

    for (let i = 0; i < this.length; i++) {
        result[i] = func(this[i])
    }
    return result
}

Array.prototype.selfMadeMap = selfMadeMap

console.log(students.selfMadeMap(getName)) - не будет работать потому что стрелочные функции не работают с this
мы не попадем в цикл for

____________________________________________________________selfMadeMap_________________________________________________
function selfMadeMap(func) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        result[i] = func(this[i])
    }
    return result
}

Array.prototype.selfMadeMap = selfMadeMap

console.log(students.selfMadeMap(getName)) // (4) ['Bob', 'Alex', 'Nick', 'John']

Array.prototype.selfMadeMap = selfMadeMap // так делать не надо после этого у всех массивов появится функция selfMadeMap
а у других программистов ее нет поэтому будет сложно контролируемое поведение кода

console.log(students.selfMadeMap(getName)) // (4) ['Bob', 'Alex', 'Nick', 'John']
контекстом вызова будет тот объект который будет ее использовать то есть thisом будет student
а если функция будет стрелочной то thisом будет Window
стрелочная функция берет контекст у родителя родителя и так до window
но если стрелочная функция будет внутри другой функции то thisом будет эта функция родитель

____________________________________________________________selfMadeMap_________________________________________________


*/

const students = [
    {
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        name: 'Alex',
        age: 32,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        name: 'Nick',
        age: 21,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false,
    },
]
const getName = (obj) => obj.name
const getScores = (obj) => obj.scores
const getStudent = (obj) => ({...obj, isStudent: true})
const getStudentsNames = (array) => {
    const result = []
    const getName = (student) => student.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}

console.log(getStudentsNames(students))

const getStudentsScores = (array) => {
    const result = []

    let sum = 0
    for (let i = 0; i < array.length; i++) {
        result[i] = getScores(array[i])
    }
    for (let k = 0; k < result.length; k++) {
        sum += result[k]
    }
    return sum/result.length

}

console.log(getStudentsScores(students))

const getStudents = (array) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = getStudent(array[i])
    }
    return result
}

console.log(getStudents(students))

const getMappedArray = (array, func) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getMappedArray(students, getName)) // (4) ['Bob', 'Alex', 'Nick', 'John']
console.log(getMappedArray(students, (obj) => obj.name)) // (4) ['Bob', 'Alex', 'Nick', 'John']
console.log(students.map((obj) => obj.name)) // (4) ['Bob', 'Alex', 'Nick', 'John']

function selfMadeMap(func) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        result[i] = func(this[i])
    }
    return result
}

// Array.prototype.selfMadeMap = selfMadeMap // так делать не надо после этого у всех массивов появится функция
// // selfMadeMap
//
// console.log(students.selfMadeMap(getName)) // (4) ['Bob', 'Alex', 'Nick', 'John']
// контекстом вызова будет тот объект который будет ее использовать то есть thisом будет student
// а если функция будет стрелочной то thisом будет Window
// стрелочная функция берет контекст у родителя родителя и так до window
// но если стрелочная функция будет внутри другой функции то thisом будет эта функция родитель

/*
Array - это объект потому что мы ставим после него .
в js объект представлен ввиде объекта массива и функции и еще null

но вот этот Array

Array.prototype.selfMadeMap = selfMadeMap
^
Специальная функция конструктор которая призвана создавать новые массивы

Вместо литерала массива [] мы можем создать новый пустой массив

new Array()

То есть эта функция которая создает новые сущности
такие функции называются либо creator либо constructor

Эта функция конструктор Array создает массивы
Всего примерно 30 методов массивов которые покрывают основные операции с массивами

Эта функция Array имеет бюро проката методов массивов prototype
в этом объекте prototype собраны все функции которые представлены как методы массивов
и если нашему массиву который создается всегда при помощью функцию конструктор Array
понадобится какой-то метод массивов он обращается к своему родителю prototype
в бюро проката методов массивов и т.о. массив получает доступ

У массивов нет метода map или фильтер или и т.д. все эти методы вшиты в метод prototype
У массива из собственного (не прокатного) только свойство length

for лежит под капотом у всех методов массивов
*/


// _________________________________________________ Фильтрация массива

/*
создаем функцию

const getFilteredArray = (arr, func)

которая будет принимать arr и функцию которая будет содержать условие фильтрации

Для себя скажем что вызов функции func с очередным элементом массива
func(arr[i]) должен нам вернуть => либо true если элемент удовлетворяет условию либо false если элемент не прошел фильтр

то есть внутри функции

const getFilteredArray = (arr, func) => {
    нам нужно вернуть новый литерал массива
    в котором будут лежать элементы которые прошли через фильтр

}

Итого

const getFilteredArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        func(arr[i])
    }
    return result
}

const getFilteredArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age >= 21)) - вернет три объекта у которым age больше либо равен 21

const SelfMadeFilter = (arr, filterFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if ( filterFn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

const functionScoresOverThanHundred = (student) => student.scores >= 100
console.log(students.filter(functionScoresOverThanHundred))
console.log(SelfMadeFilter(students, functionScoresOverThanHundred))

*/

const getFilteredArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age >= 21)) // the same result
console.log(students.filter( st => st.age >= 21)) // the same result

const addElToEndOfArray = (arr, el) => {
    arr[arr.length] = el
    return arr.length
}

console.log(addElToEndOfArray([1,2,3], 4)) // 4

const SelfMadeFilter = (arr, filterFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if ( filterFn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

const functionScoresOverThanHundred = (student) => student.scores >= 100
console.log(students.filter(functionScoresOverThanHundred))
console.log(SelfMadeFilter(students, functionScoresOverThanHundred))

// модель find
// ищем студента с именем Bob

const findBob = (student) => student.name === 'Bob'

const selfMadeFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if ( func(arr[i]) === true) {
            return arr[i] // обрывает и функцию и цикл
        }
    }
}

console.log(students.find(findBob)) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
console.log(selfMadeFind(students, findBob)) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}

/*
CRUD - для иммьютабельной работы с данными

Create - Добавление элемента в массив [..arr, newElement] иммьютабельный аналог push либо [...arr].push(newElement)
Read - выводим список для чтения у нас в данных список объектов {} а нужно получить список jsx элементов {} => <></>
    map
    todolist мапили объекты чтобы получить li,
    filter
    используем например для фильтрации товаров по определенной цене в интернет магазине
    sort (если сортировка не реализована на сервере)
    сортировка уже имеющихся элементов на странице, тоже возвращает новый массив
    чаще всего реализована на сервере
Update - бежим по массиву, ищем нужный элемент или группу нужных элементов, делаем их (его) копию и вносим изменения
    map
Delete - filter

Итого основные методы массивов - map и filter
*/

// again
console.log('------------------selfMadePoP-----------------------------')
const selfMadePoP = (array) => {
    const lastElem = array[array.length-1]
    array.length = array.length - 1
    return lastElem

}
console.log(selfMadePoP(students))
console.log(students.pop())
console.log(students)
console.log('------------------selfMadePoP-----------------------------')



const selfMadeIndexOf = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
        if ( el === arr[i]) return i
    }
    return -1
}
const student = students[0]
console.log(selfMadeIndexOf(students, student))
console.log(students.indexOf(student))

/*
                                                   this
this - контекст вызова, принимает очертание в момент вызова, пока функция не вызвана не понятно какой объект является
this

когда воду наливают в чашку она становится чашкой, когда воду наливают в бутылку она становится бутылкой
так и this

- не использовать со стрелочными функциями
у стрелочной функции нет своего this она может использовать только внешний контекст

Когда мы создаем функцию мы не знаем какой массив будет ее использовать
Если какой-то объект будет использовать нашу функцию, но пока мы еще не знаем что это за объект
массив ли или {} до тех пор внутри функции этот абстрактный объект можем назвать словом this
*/

function selfMadeFinD(func) {
    for (let i = 0; i < this.length; i++) {
        if(func(this[i]) === true) {
            return this[i]
        }
    }
}
// Array.prototype.map = selfMadeFinD  - сломали прототип
// console.log(students.map(findBob)) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}


Array.prototype.selfMadeFinD = selfMadeFinD // - запишется в родителю в prototype (только в рамках нашего проекта)
console.log(students.selfMadeFinD(findBob)) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
console.log(students.find(findBob)) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}

/*
                                                    Array
Функция конструктор, мать всех массивов

Array - объект prototype - объект
когда мы рисуем [] в этот момент под капотом происходит вызов функции new Array
[] => new Array()
Все массивы которые мы используем создаются из одной и той же функции
Все массивы в коде - братья

когда мы используем метод массива мы одалживаем конкретный функционал для нашего массива у конструктора Array
Для этого у Array есть объект (свойство глобального объекта Array) - prototype (объект в объекте Array)
и этот Array.prototype выступает хранилищем всех наших методов массива
Array.prototype.map
Array.prototype.filter
Array.prototype.push

И когда мы пишем нашему пустому массиву [].push()
Наш массив [] этого push у себя не обнаруживает, волнуется, переживает, звонит родителю и спрашивает что делать с push
Array.prototype. находит push который у него написан с использованием this потому что писалось под любой массив
а это значит что эта функция будет работать с любым массивом который ее вызовет

соответсвенно наш массив [] получает доступ к этой функции push вызывает ее и этот массив []
будет для функции push thisом
[this].push()
*/

console.log(new Array()) // []

// console.log(array.find(love)) :)

// _________________________________________ 28.01.23_______________________________
const getScore = item => item.scores
const getNamee = item => item.name

const getScorez = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = getScore(array[i])
    }
    return result
}

console.log(getScorez(students))

const getNames = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = getNamee(array[i])
    }
    return result
}

console.log(getNames(students))

function getNewArray(array, func) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(getNewArray(students, getNamee))
console.log(students.map(getNamee))

// метод это функция которая является свойством объекта, map является свойством всех массивов

const addProp = item => ({...item, isStudent: true})

const itPush = (array, el) => {
    array[array.length] = el
    return array.length
}

const itFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            itPush(array, array[i])
        }
    }
    return result
}

const itIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}

const itUnShift = (array, item) => {

    for (let i = array.length-1; i >= 0; i--) {
        array[i + 1] = array[i]
    }
    array[0] = item
    return array.length
}
console.log(students)
console.log(itUnShift(students,  {
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100,
    isStudent: false,
}))

const itShift = (array) => {
    const removedItem = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length-1
    return removedItem
}
const nums = [1,2,3,4,5]
itShift(nums)
console.log(itShift(nums))

/*
    Array.prototype.map
    prototype потому что это объект который является свойством глобального конструктора Array
    в котором хранятся методы массивов

    console.dir(Array)
*/
// ________________________________________________создаем новый метод массива _________________________________________
function getLength() {
    return this.length
}

Array.prototype.hey = getLength

const someArray = [1,2,3]

console.log(someArray.hey()) // 0

/* метод hey появится у глобального объекта Array в свойстве prototype и поэтому будет доступно у всех массивов*/
// ________________________________________________создаем новый метод массива _________________________________________

Array.prototype.heyArrow = () => {
    console.log(this) // Window{window: Window, self: Window, document: document, name: '', location: Location,…}
}

console.log(nums.heyArrow())
/*
В тот момент когда мы создали стрелочную функцию она определила что будет для нее this (глобальный объект window)
и больше это никогда не меняется

А если мы возьмем function declaration и посмотрим что у нее будет thisом тот массив от которого мы вызываем функцию

this принимает ту сущность которую в него передают как параметр функции

this - это ссылка или контекст вызова на тот объект который использует эту функцию
*/

Array.prototype.getNamey = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i].name)
    }
}

students.getNamey()

Array.prototype.getAllValues = function (key) {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i][key])
    }
}

students.getAllValues('age') // 19 34 32

class Student {

}

const ivan = new Student('Иван')

/*
new Version


let input = [1, 4, 1, 2, 11, 2, 3, 1]

function some(input){
    let preResult = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 1) {
            preResult++
        }
    }
    let result = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === preResult) {
            result++
        }
    }
    return result
}

console.log(some(input));

const getMappedArray = (array, mapFunc) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        result[i] = mapFunc(input[i])
    }
    return result
}

console.log(getMappedArray(input, el => ({...el, phone: '2'})));

const getFilteredArray = (array, filterFunc) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (filterFunc(input[i])) {
            result.push(input[i])
        }
    }
    return result
}

console.log(getFilteredArray(input, el => el.age > 40));

const findElement = (array, findFunc) => {
    for (let i = 0; i < input.length; i++) {
        if (findFunc(input[i])) {
            return input[i]
        }
    }
    return undefined
}

console.log(getFilteredArray(input, el => el === 4));

const itPush = (array, newItem) => {
    array[array.length] = newItem // добавляем на позицию последнего элемента в массиве array.length новое значение
    // array.length = 3 console.log(input) [1,4,1]
    return array.length
}

console.log(itPush(input, 5));
console.log(input)

const itPop = (array) => {
    const lastItem = array[array.length - 1]
    array.length = array.length - 1 // удаляем последний элемент за счет сокращения длины массива
    return lastItem
}

console.log(itPop(input))

let input_2 = [1, 2, 3, 4, 5]

const reverse = (array) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = array[array.length - (i+1)]
    }
    return result
}

console.log(reverse(input_2)) // [5,4,3,2,1]

let input_3 = [1, 2, 3, 4, 5]

const reverse_2 = (array) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[array.length - 1 - i] = array[i]
    }
    return result
}

console.log(reverse(input_3)) // [5,4,3,2,1]

let input_4 = [1, 2, 3, 4, 5]

const reverse_3 = (array) => {
    for (let i = 0; i < Math.floor(array.length/2); i++) { // Math.floor(array.length/2) округляем средний элемент до большего значения чтобы не делать лишнюю итарецию с элементом который меняется местами сам с собой
        const store = array[array.length - 1 - i]
        array[array.length - 1 - i] = array[i]
        array[i] = store
    }
}
reverse_3(input_4)
console.log(input_4) // [5,4,3,2,1]

let input_5 = [1, 2, 3, 4, 5]

const slice = (array, startIndex = 0, endIndex = array.length) => {
    const result = []
    for (let i = startIndex; i < endIndex; i++) { // идем от старт индекса до енд индекса
        result[i-startIndex] = array[i]
    }
    return result
}

console.log(slice(input_5))

let input_6 = [1, 2, 3, 4, 5]

// const itIncludes = (array, el, startIndex = 0) => {
//     // if (startIndex < 0) {
//     //     startIndex = array.length + startIndex
//     // }
//     const start = startIndex < 0 ? array.length + startIndex : startIndex
//     for (let i = start; i < array.length; i++) {
//         if (array[i] === el) {
//             return true
//         }
//     }
//     return false
// }
//
// console.log(itIncludes(input_6, 5,-2))
// console.log(input.__proto__ === Array.prototype)

// Делаем метод itIncludes для этого удаляем array из параметров и указываем в теле функции this
// которое в данном контексте будет означать обращение к массиву от которого будет вызван метод

// в этом случае дирректива function обязательно чтобы не терялся контекст this
// стрелочные функции не понимают что такое this они не работают с контекстом вызова
// у стрелочной функции this будет являться глобальным объектом window в стогом режиме будет undefined
// за полезную практику можно взять проверку значения this console.log(this) в начале дабы убедиться в правильной интерпретации планируемого значения
// стрелочная функция переводит стрелы с this на window
function itIncludes (el, startIndex = 0) {
    const start = startIndex < 0 ? this.length + startIndex : startIndex // this.length проверяем длину массива который вызывает этот метод
    for (let i = start; i < this.length; i++) {
        if (this[i] === el) {
            return true
        }
    }
    return false
}

console.log(itIncludes(input_6, 5,-2))
console.log(input.__proto__ === Array.prototype)

// это позволит вызывать метода у других массивов
Array.prototype.itIncludes = itIncludes
// теперь у всех массивов ниже в коде будет работать новый метод itIncludes

// одновременно с созданием массива array получаем телефон для связи с родителем в виде Array
// телефон записывается в свойство __proto__ именно там содержится ссылка на Array
const array = new Array(1,2,3,4,5) // способ создания массива с помощью ключевого слова new и класса Array
console.log(array) // [1,2,3,4,5]

console.log(array.itIncludes(4, -2)) // true


 */