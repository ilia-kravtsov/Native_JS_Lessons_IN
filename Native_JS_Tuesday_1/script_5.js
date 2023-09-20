
// 1 sort() сортирует строки 'из коробки' без доп параметров
let str_1 = ['Bob', 'Alex', 'John']
console.log(str_1.sort()) // [ 'Alex', 'Bob', 'John' ]

// 2 sort() сортирует в соотв с unicode
let str_2 = ['Bob', 'Alex', 'John', 'john', '123', 'игорь', 'Юрий', 'ЮРИЙ']
console.log(str_2.sort()) // ['123', 'Alex', 'Bob', 'John', 'john', 'ЮРИЙ', 'Юрий', 'игорь']

// 3 sort() работает мутабельно (сортирует массив на месте)
console.log(str_2) // (8) ['123', 'Alex', 'Bob', 'John', 'john', 'ЮРИЙ', 'Юрий', 'игорь']

// 4 sort() возвращает ссылку на исходный массив
console.log(str_2 === str_2.sort()) // true

// чтобы сортировка происходила по возрастанию чисел или других случаев нужно передать callback
const numbers = [1000, '+20', -500, 77, 9]
console.log(numbers.sort()) // (5) ['+20', -500, 1000, 77, 9] - т е sort привел значения к строкам по таблице unicode
// арифметически это не правильно но по таблице unicode правильно, поэтому напишем функцию сравнения
// сортируем по возрастанию
const compareFn = (a, b) => {
    if (a > b) { // > 0 ? надо поменять местами
        return 5567
    } else { //     < 0 ? не надо менять местами
        return -22
    }
}
// 6 Функция сравнения должна возвращать число большее или меньшее 0
// отсортируй массив с числами используя функцию compareFn
// применяй compareFn попарно ко всем элементам массива до тех пор пока они не упорядочатся
// если метод sort получает положительное число он меняет элементы местами если нет то нет, и так со всеми элементами
console.log(numbers.sort(compareFn)) // (5) [-500, 9, '+20', 77, 1000]
// функцию compareFn можно заменить обычным вычитанием
console.log(numbers.sort((a, b) => a - b)) // (5) [-500, 9, '+20', 77, 1000]
// для того чтобы сделать сортировку по убыванию чисел
// console.log(numbers.sort((a, b) => b - a)) // (5) [1000, 77, '+20', 9, -500]

// 7 Если вместе с sort используют reverse
console.log(numbers.reverse()) // (5) [1000, 77, '+20', 9, -500]
// console.log(numbers) // (5) [1000, 77, '+20', 9, -500] reverse работает так же мутабельно как и sort
// и изменяет массив на месте

// работа с объектами
// как отсортировать массив с объектами
// по алфавиту
const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: 'alex',
        age: 22,
        isMarried: true,
        scores: 89
    },
]

// Сортировка массва объектов по строковым значениям
// a, b - попарные элементы массива

const compareObjByName = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}

console.log(students.sort(compareObjByName))
// сортировка бывает регистрозависимая и регистронезависимая

// это регистрозависимая сортировка

/* это регистрозависимая сортировка
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'alex', age: 22, isMarried: true, scores: 89 }
 */

// это регистроНезависимая сортировка

// для этого существует спец метод строк для сравнения строк localCompare
// localCompare - это готовая функция которая возвращает 1 или -1 в зависимости того как стоят строки
// в таблице символов unicode при этом под капотом выполняется приведение к одному регистру
console.log(students.sort((a,b) => a.name.localeCompare(b.name)))
/* это регистроНезависимая сортировка
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
 */

// __________________ Сортировка массива по числовым значениям, допусти по scores
console.log(students.sort((a,b) => a.scores - b.scores))
/*
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'John', age: 19, isMarried: false, scores: 121 }
 */
console.log(students.sort((a,b) => b.scores - a.scores))
/*
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Alex', age: 24, isMarried: true, scores: 89 }
 */

/*
Сортировка вложенности, я хочу отсортировать по алфавиту но чтобы внутри буквы а все студенты были отсортировано
по возрасту
*/

// bubble sort пузырьковая сортировка
/*
const numbers = [67, 34, 12, 22] просмотри алгоритм сортировки по возрастанию
1 [34, 67, 12, 22]
2 [34, 12, 67, 22]
3 [34, 12, 22, 67] - видим продвижение значения 67 в конец массива то есть как-бы 'всплытие' в конец массива
имменно поэтому сортировка называется пузырьковой bubble sort
это 1 проход дальше идет следующий для 34 и 12 и т.д.
 */

// закодим 1 такой проход
const nums = [67, 34, 12, 22]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
        // меняем
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
console.log(nums) // [ 34, 12, 22, 67 ] 1 проход
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
        // меняем
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
        // меняем
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
        // меняем
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
console.log(nums) // [ 12, 22, 34, 67 ] 4 прохода

// чтобы так отсортировать весь массив так нужно сделать столько раз сколько элементов в массиве
// в нашем случае 4
/*
for (let i = 0; i < numbers.length; i++) { // аналог sort (a - b)
    if ((numbers[i] - numbers[i+1]) > 0) {
        // меняем
        let temp = numbers[i]
        numbers[i] = numbers[i+1]
        numbers[i+1] = temp
    }
}
 */

/*
Если мы в массиве из 4-х элементов поставили на место 3 из самых больших то 4 проход запускать не нужно
потому что начальное значение уже стоит на месте поэтому нам нужно в качестве крайнего значения брать
length-1 поэтому
 */
const numz = [67, 34, 12, 22]

for (let i = 0; i < numz.length-1; i++) {
    if (numz[i] > numz[i+1]) {
        // меняем
        let temp = numz[i]
        numz[i] = numz[i+1]
        numz[i+1] = temp
    }
}
console.log(numz) // [ 34, 12, 22, 67 ] 1 проход
// так как такой цикл для полной сортировки массива нам нужно повторить столько раз сколько length-1
// в сортируемом массиве то создаем еще один внешний цикл
const num$ = [67, 34, 12, 22]

for (let j = 0; j < num$.length-1; j++) {
    for (let i = 0; i < num$.length-1; i++) {
        if (num$[i] > num$[i+1]) {
            // меняем
            let temp = num$[i]
            num$[i] = num$[i+1]
            num$[i+1] = temp
        }
    }
}
console.log(num$) // [ 12, 22, 34, 67 ] код совершил 3 прохода поскольку length = 4 - 1 === 3
// сложность данного алгоритма О(n^2) мы его оптимизировали так что теперь его сложность будет О((n-1)^2)
// Можно оптимизировать еще и после каждого прохода больше не трогать последнее значение length - 1 - j
// так мы сократили количество итераций во внутреннем цикле

const nums_2 = [67, 34, 12, 22]

for (let j = 0; j < nums_2.length - 1 - j; j++) {
    for (let i = 0; i < nums_2.length-1; i++) {
        if (nums_2[i] > nums_2[i+1]) {
            // меняем
            let temp = nums_2[i]
            nums_2[i] = nums_2[i+1]
            nums_2[i+1] = temp
        }
    }
}
console.log(nums_2) // [ 12, 22, 34, 67 ] О((n-1)*((n-1)/2))
/*
const nums_2 = [67, 34, 12, 22] после 2-х проходов массив уже отсортирован и следующие 2 итерации не нужны
поэтому добавляем во внешний цикл переменную на случай если массив еще не до конца завершил проход но результат
уже готов
предположим наш массив отсортирован let isSorted = true
и далее бежим по массиву внутренним циклом проверять пары чисел
  for (let i = 0; i < nums_3.length-1; i++) {
        if (nums_3[i] > nums_3[i+1]) {
            // меняем
            let temp = nums_3[i]
            nums_3[i] = nums_3[i+1]
            nums_3[i+1] = temp
        }
    }
как только мы нашли одну неупорядоченную пару то есть 67 и 34 это значит что в этот момент
мы проваливаемся в  if (nums_3[i] > nums_3[i+1]) и это будет значить что наш массив не отсортирован то есть
isSorted = false
      if (nums_3[i] > nums_3[i+1]) {
            isSorted = false
            let temp = nums_3[i]
            nums_3[i] = nums_3[i+1]
            nums_3[i+1] = temp
        }

Далее мы выходим из цикла и проверяем если мы провалились в if (nums_3[i] > nums_3[i+1]) то есть isSorted = false
то тогда мы пойдем на новый прогон цикла, а если не провалились, то это значит что isSorted = true
а если isSorted = true то мы говорим break

const nums_3 = [67, 34, 12, 22]

for (let j = 0; j < nums_3.length - 1 - j; j++) {
    let isSorted = true
    for (let i = 0; i < nums_3.length-1; i++) {
        if (nums_3[i] > nums_3[i+1]) {
            isSorted = false
            let temp = nums_3[i]
            nums_3[i] = nums_3[i+1]
            nums_3[i+1] = temp
        }
    }
    if(isSorted) break
}
console.log(nums_3) // (4) [12, 22, 34, 67]

таким образом лишних итераций не будет
*/

const nums_3 = [67, 34, 12, 22]

for (let j = 0; j < nums_3.length - 1 - j; j++) {
    let isSorted = true
    for (let i = 0; i < nums_3.length-1; i++) {
        if (nums_3[i] > nums_3[i+1]) { // если true то надо переставить
            isSorted = false
            let temp = nums_3[i]
            nums_3[i] = nums_3[i+1]
            nums_3[i+1] = temp
        }
    }
    if(isSorted) break
}
console.log(nums_3) // (4) [12, 22, 34, 67]

// итак сортировка пузырьком

const nums_4 = [67, 34, 12, 22]

for (let j = 0; j < nums_4.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums_4.length; i++) {
        if (nums_4[i] > nums_4[i+1]) { // если true то надо переставить
            isSorted = false
            let temp = nums_4[i]
            nums_4[i] = nums_4[i+1]
            nums_4[i+1] = temp
        }
    }
    if(isSorted) break
}
console.log(nums_4)

/*
  let temp = nums_4[i]
  nums_4[i] = nums_4[i+1]
  nums_4[i+1] = temp
Этот код можно записать более современным способом
Создадим массив и положим в него 2 элемента нашего исходного массива
[nums_5[i], nums_5[i+1]] а затем выполним деструктуризацию этого массва
то есть мы скажем что все элементы этого массива надо положить в переменную
первый элемент массива nums_5[i] надо положить в переменную nums_5[i+1]
а второй элемент исходного массива nums_5[i+1] надо положить в переменную nums_5[i]

[nums_5[i+1], nums_5[i]] = [nums_5[i], nums_5[i+1]] это аналог useState только там массив справа создавала
сама функция useState а мы создали сами, а сами переменные были объявлены ранее
таким образом мы поменяли две переменные местами
литерал [] слева от = не приводит к созданию нового массива это схема шаблон для массива справа от =
поэтому
           let temp = nums_5[i]
            nums_5[i] = nums_5[i+1]
            nums_5[i+1] = temp
мы удаляем

const nums_5 = [67, 34, 12, 22]

for (let j = 0; j < nums_5.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums_5.length; i++) {
        if (nums_5[i] > nums_5[i+1]) { // если true то надо переставить
            isSorted = false
            [nums_5[i+1], nums_5[i]] = [nums_5[i], nums_5[i+1]]
        }
    }
    if(isSorted) break
}
console.log(nums_5)

работать такая версия не будет, пока мы непоставим ; после false

const nums_5 = [67, 34, 12, 22]

for (let j = 0; j < nums_5.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums_5.length; i++) {
        if (nums_5[i] > nums_5[i+1]) { // если true то надо переставить
            isSorted = false;
            [nums_5[i+1], nums_5[i]] = [nums_5[i], nums_5[i+1]]
        }
    }
    if(isSorted) break
}
console.log(nums_5)

Не работает без ; из-за работы интерпретатора,

Если первым символом в строке идет [ то предыдущую строку нужно заканчивать ;

потому что интерпретатор по своей глупости считает что значение в предыдущей перед [ строке
(в нашем случае isSorted = false) и что мы у этого значения пытаемся получить индекс
isSorted = false[nums_5[i+1], nums_5[i]] и интерпретатор думает что false Это массив у которого
нужно найти индекс и тогда интерпретатор ругается почему у тебя внутри индекса 2 числа разделены запятой

кстати false[1] - не смущает интерпретатор хотя это значение - абсурд
 */
const nums_5 = [67, 34, 12, 22]

for (let j = 0; j < nums_5.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums_5.length; i++) {
        if (nums_5[i] > nums_5[i+1]) { // если true то надо переставить
            isSorted = false
            [nums_5[i+1], nums_5[i]] = [nums_5[i], nums_5[i+1]]
        }
    }
    if(isSorted) break
}
console.log(nums_5) // [ 12, 22, 34, 67 ]

/*
Объяснение [nums_5[i+1], nums_5[i]] = [nums_5[i], nums_5[i+1]]

let a, b;
let arr_5 = [1,2];

[a,b] = arr_5

[a,b] = arr_5  - эта схема используется для присвоения вместо
a = arr_5[0]
b = arr_5[1] the same with [a,b] = arr_5

[a,b] = arr_5 - первый элемент массива arr_5 присваивается в переменную a а второй в переменную b
[a,b] - это не массив это схема присвоение элементов массива

чтобы поменять элементы местами убираем ссылку arr_5

let arr_5 = [1,2];

[a,b] = arr_5 и получаем

[a,b] = [1,2];

то есть мы просто присваиваем a = 1 b = 2

итого у нас

let a, b;

[a,b] = [1,2];

затем программисты сократили до

let [a,b] = useState() здесь была функция которая всегда возвращает массив из двух элементов, то есть

[a,b] = [state,setState];
*/

// как поменять значения местами используя только арифметические операторы (только для цифр)
let a = 3
let b = 4

a = a + b // 7
b = a - b // 7 - 4 = 3
a = a - b // 7 - 3
console.log(a) // 4


// ____________________________________________________ new version

/*
sort

работает мутабельно
Возвращаемое значение - отсортированный массив.
Важно, что копия массива не создаётся - массив сортируется на месте.

метод sort возвращает ссылку на исходный массив
console.log(names_2 === names_2.sort()) true

в рамках одного алфавита сортируется по алфавиту

в остальных случаях сортирует строки по unicode 'из коробки' т.е. без дополнительных параметров
1 Цифры
2 Латинский алфавит (заглавные)
3 Латинский алфивит (строчные)
4 Символы других алфавитов (заглавные - строчные)

новый метод toSorted возвращает новый массив

числа в массиве сортируются как строки
const numbers = [100,9,22,77];
console.log(numbers.sort()) // [100,22,77,9] то есть он представит их для себя как ['100','22','77','9']

работает по прицнципу:
если слово начинается на а то оно будет стоять в словаре первым вне зависимости от того скольков нем букв
а слово на б будет вторым

для того чтобы это исправить в .sort() нужно передать функцию сравнения назовем ее compareFunction

const compareFunction = (a, b) => {  // по убыванию
    // a = 3 b = 5 => нужно поменять местами таков закон сансары
    // если нужно поменять числа местами функция должна вернуть любое положительное число > 0
    // a = 3 b = 5 => > 0
    // если a = 5 b = 3 || b = 5 то нам не нужно ничего менять а функция должна вернуть любое число < 0
    // a = 5 b = 3 => < 0
}

то есть в фильтре фильтрация происходит по значениям true false
а в sort функция должна вернуть любое положительное число если нужно поменять элементы местами
или любое отрицательное если их менять местами не нужно

итого

const compareFunction = (a, b) => {  // по убыванию
    // a = 3 b = 5 => нужно поменять местами таков закон сансары
    // если нужно поменять числа местами функция должна вернуть любое положительное число > 0
    // a = 3 b = 5 => > 0
    // если a = 5 b = 3 || b = 5 то нам не нужно ничего менять а функция должна вернуть любое число < 0
    // a = 5 b = 3 => < 0
        // 0 тоже не создает перестановки как отрицательное число
    if (a >= b) {
        return -1 // перестановку не выполняем
    } else {
        return 1 // перестановку выполняем
    }
}

console.log(numbers.sort(compareFunction)) // [100,77,22,9] it works!

// теперь возникает вопрос как получить отрицательное число быстрее

// чтобы получить отрицательное число в случае когда a = 100 а b = 9 нужно от b отнять a
const compareFunction_2 = (a,b) => b - a // тот же самый эффект

console.log(numbers.sort(compareFunction)) // [100,77,22,9]
console.log(numbers_2.sort(compareFunction_2)) // [100,77,22,9]

// сортируем по алфавиту
console.log(students.sort((a,b) => a.name.localeCompare(b.name)))

функция для сравнения строк в пределах одного локального алфавита localcompare
особенность localcompare в том что она работает регистронезависимо
 */
const names = ['Bob', 'Alex', 'Donald', 'Zak']
console.log(names.sort())

// вопрос - как это будет отсортировано?
const names_2 = ['Bob', 'alex', 'bob', 'Alex', 'Юрий', 'игорь', 1000]
console.log(names_2.sort())
console.log(names_2 === names_2.sort())

const numbers = [100,9,22,77];
console.log(numbers.sort())

const compareFunction = (a, b) => {  // по убыванию
    // a = 3 b = 5 => нужно поменять местами таков закон сансары
    // если нужно поменять числа местами функция должна вернуть любое положительное число > 0
    // a = 3 b = 5 => > 0
    // если a = 5 b = 3 || b = 5 то нам не нужно ничего менять а функция должна вернуть любое число < 0
    // a = 5 b = 3 => < 0
    // 0 тоже не создает перестановки
    if (a >= b) {
        return -1 // перестановку не выполняем
    } else {
        return 1 // перестановку выполняем
    }
}

console.log(numbers.sort(compareFunction))
const numbers_2 = [100,9,22,77];
// теперь возникает вопрос как получить отрицательное число быстрее
// чтобы получить отрицательное число в случае когда a = 100 а b = 9 нужно от b отнять a
const compareFunction_2 = (a,b) => b - a // тот же самый эффект
console.log(numbers_2.sort(compareFunction_2))

// частый кейс когда уже есть отсортированный массив а нужно его отсортировать в обратном направлении
// используется reverse
console.log(numbers_2.reverse()) // [9, 22, 77, 100]

// сортировка объектов по свойствам объектов
const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95,
    },
    {
        name: 'Alex',
        age: 15,
        isMarried: false,
        scores: 95,
    },
    {
        name: 'alex',
        age: 15,
        isMarried: false,
        scores: 95,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: true,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121,
    },
]
// сортируем чтобы самый молодой был первым

console.log(students.sort((a,b) => a.age - b.age))
/*
(4) [{…}, {…}, {…}, {…}]
0: {name: 'alex', age: 15, isMarried: false, scores: 95}
1: {name: 'John', age: 19, isMarried: false, scores: 121}
2: {name: 'Nick', age: 20, isMarried: true, scores: 120}
3: {name: 'Bob', age: 22, isMarried: true, scores: 95}
 */

// сортируем по алфавиту
/*
функция для сравнения строк в пределах одного локального алфавита localcompare
особенность localcompare в том что она работает регистронезависимо
то есть в процессе выполнения функция приводит строки к одному регистру
поэтому сортировка не стабильна
 */
console.log(students.sort((a,b) => a.name.localeCompare(b.name)))

// _____________________________________________ сортировка пузырьком
/*
практическая ценность алгоритма пузырьковой сортировки равна 0
суть:
следим за 88
const numbers_3 = [23,88,56,34,67,99]
const numbers_3 = [23,56,88,34,67,99]
const numbers_3 = [23,56,34,88,67,99]
const numbers_3 = [23,56,34,67,88,99]

типо всплывает как пузырёк
берем попарно 2 значения и проверяем стоят ли они в том порядке в котором нам надо или нет
если да то переходим к следующей паре если нет то меняем их местами и переходим к следующей паре
 */
// сортируем по возрастанию
const numbers_3 = [10,12,23,88,56,34,67,99,93,82]
let count = 0
// это и есть сортировка пузырьком
for (let j = 0; j < numbers_3.length - 1; j++) { // здесь numbers_3.length-1; чтобы не запускать цикл из-за последнего
    // элемента который уже стоит на своем месте
    // наружный цикл нужен потому что за 1 проход мы поднимем наверх только 1 цифру 88 поэтому прогоняем его столько
    // же раз сколько и элементов в массиве
    count++
    // предполагаем что наш массив отсортирован
    let isSorted = true

    // с каждой итерацией для оптимизации нужно сокращать внутренний цикл на j чтобы не запускать лишние итерации
    // в 1 итерации j = 0 поэтому первый элемент пройдет до конца
    // в дальнейшем получится что с каждым возрастанием j i будет сокращаться
    for (let i = 0; i < numbers_3.length - 1 - j; i++) { // numbers_3.length - 1; чтобы не прогонять по циклу когда
        // элементы уже закончились, то есть при попытке выйти за пределы массива, при попытке обратиться к не
        // существующему элементу массива в других языках программирование будет ошибка
        if (numbers_3[i] > numbers_3[i+1]) { // если предыдущий элемент больше следующего - то меняем местами
            // numbers_3[i] > numbers_3[i+1]) в этом моменте при последнем элементе массива вы выйдем за его пределы
            isSorted = false;
            // без точки с запятой в строке выше интерпретатор думает что мы ищем ключ у false
            // false[numbers_3[i+1], numbers_3[i]]
            // 1 way
            // const temp = numbers_3[i]
            // numbers_3[i] = numbers_3[i+1]
            // numbers_3[i+1] = temp
            // 2 way
            [numbers_3[i+1], numbers_3[i]] = [numbers_3[i], numbers_3[i+1]] // деструктуризация = массив
            // это один из немногих случаев когда не работает без точки с запятой выше
            // это происходит когда следующая строка начинается либо с [ либо с {
        }
        count++
    }
    // если мы провалились в if выше значит isSorted = false а если он false значит мы не break
    // а есои мы не провалились в if значит isSorted = true и значит все отсортировано
    if (isSorted) break;
}
console.log(numbers_3) // [23, 34, 56, 67, 88, 99]
console.log(count)
