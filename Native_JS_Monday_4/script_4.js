/*
Плоские данные - минимальный уровень вложенности

Если у нас есть массив с 10 элементами, то чтобы его перебрать нужно совершить 10 операций
а чтобы перебрать массив с 10 элементами которые вложены в предыдущий массив то надо совершить 100 операций

То есть при увеличении вложенности увеличивается сложность обработки вложенных массивов

База данных представляет собой большое количество относительно простых но связанных между собой структур
реляционные базы данных (relations)

endpoint это следующая часть адреса для доступа к ресурсу более точная

https://jsonplaceholder.typicode.com/ - квартира 35
https://jsonplaceholder.typicode.com/users - комната 2 в квартире 35

Адреса для запроса разных json

https://jsonplaceholder.typicode.com/posts/?userId=1
в каждом енд поинте можно передать id и сервер отдаст все посты userId=1
похоже на фильтрацию но это называется query параметры

Пользователю не нужно видеть все данные, ему нужно сделать запрос на определенный endpoint todolist забрать список
todolist подходящих под endpoint

Делаем запрос и получаем ответ для конкретного todolist

Обращение к серверу передача данных это время нагрузка

Если у пользователя будет не более 5-10 задач (миниприложение)
можно все одним запросом забрать и уже дальше на фронте использовать

не нужно тратить время на дополнительный запрос если мы можем очень быстро забрать первым запросом
а если данные тяжелые то лучше подтягивать их по частям

Одно из решений проблемы работы с большими данными это показ пользователю только тех данных которые он хочет видеть
то есть загружать только до тех пор пока пользователь скролит а дальше не загружать пока он не поскролит дальше

Вычисляемое свойство объекта [todolist_1] - использует не наименование переменной, а ее значение
что нам и нужно для получения id

Когда мы берем поле для ключа в []
мы тем самым говорим браузеру что внутри будет выражение результат выполнения которого
следует использовать в качестве ключа объекта [todolist_1] ['234lbjh']

Если такое выражение состоит из одной переменной const todolist_1 = '234lbjh'
то при записи [todolist_1] эта переменная просто будет прочитана

А если мы создадим вычисляемое свойство объекта [10+30] то будет создан ключ '40' и приведен к строке

const getPropName = (param) => `${param}key`

const tasks = {
    [todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],
    [todolist_2]: [
        {id: '24', name: 'Meat', isDone: true},
        {id: '22', name: 'Milk', isDone: true},
    ],
    [10+30]: [],
    [getPropName('object_')]: [] // object_key
}

console.log(tasks)

Если нам надо использовать какое-то выражение результат которого мы не знаем
а когда мы генерируем id: v1() с помощью функции v1() именно так и происходит мы не знаем что это будет за строка
нет, но мы можем сохранить такую строку в переменную const todolist_1 = '234lbjh'
и сказать то значение которое будет в этой переменной '234lbjh' используй в качестве id для todolist    id: todolist_1,
и используй в качестве ключа для списка задач к этому todolist

[todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],

То что мы используем синтаксис вычисляемых свойств объекта для создания ключей [todolist_1]
не делает этот объект не объектом то есть это объект [todolist_1]

эти [todolist_1] работают именно так только когда они находятся именно внутри объекта

 tasks = {
    [todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],
}

[todolist_1] это нам нужно для того чтобы использовать переменные в качестве ключей
потому что мы не знаем какую-именно строку нам выдаст uuid

Мы не работаем со значением мы прокидываем переменную завязываем наш код на работу с именем переменной
а значение при этом там может быть какое угодно мы не знаем какое там будет значение да нам и не надо

Ассоциативный массив не есть какая-то специфическая новая структура данных в js это по прежнему объект и работам с ним
точно так же как и со всеми объектами

Ассоциативный массив это абстрактный тип данных который предполагает хранение данных в формате ключ значение
и предполагает операции поиска добавления и удаления значения по ключу

Реализация этого абстрактного типа данных в языке JS называется объект

Есть человек, человек - это абстракция
Павел - это конкретная реализация концепции человека

То есть у нас есть идея, абстрактный тип данных
Павел пошел создавать язык JS Павлу подсказали что данные удобно хранить в формате ключ значение внутри {}
Павел написал эту структуру данных и назвал ее объект

А дима пошел писать язык Go и он думает хорошая концепция (абстракция)
только пускай она у меня называется ассоциативная коллекция и пускай она создается с помощью []

Разные названия, разный синтаксис [] {} но и то и другое реализация твоей абстрактной идеи

Массивы удобнее всего хранить в объектах чтобы иметь к ним прямой доступ через .
если мы храним массив в массиве то чтобы обратиться к вложенному массиву нам нужно перебирать массив родитель
быстрее обратиться через свойство объекта

Если мы пишем в объекте название ключа под капотом это тоже самое что мы пишем название в '' то есть это строка
и если мы поставим переменную как ключ в '' он и будет ее воспринимать как ключ
с помощью [] мы можем указать что это не строка, а выражение и что нужно вычислить его значение

Ассоциативный массив - это родовое название объекта

const todolist_1 = '234lbjh'
const todolist_2 = '09834kdfjl'

const todolist = [
    {
        id: todolist_1,
        title: 'what to learn',
        filter: 'all',
    },
    {
        id: todolist_2,
        title: 'what to buy',
        filter: 'all',
    },
]

const getPropName = (param) => `${param}key`

const tasks = {
    [todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],
    [todolist_2]: [
        {id: '24', name: 'Meat', isDone: true},
        {id: '22', name: 'Milk', isDone: true},
    ],
}

console.log(tasks)

Как с этой сущностью работать

Задача получить таски первого todolistId_1

Пользователь получил список todolist кликает по todolist и идет в Ap сообщение что у листа с id: todolist_1,
надо запросить список тасок

Для этого пробегаемся по ключам

console.log(tasks[todolist_1]) то есть идет прямое обращение как tasks.todolistId_1

0: {id: '12', name: 'HTML', isDone: true}
1: {id: '13', name: 'CSS', isDone: true}
length: 2

Если это массив, а мы хотим получить первый элемент этого массива {id: '12', name: 'HTML', isDone: true}
то обращаемся как к массиву

console.log(tasks[todolist_1][0])                  {id: '12', name: 'HTML', isDone: true}


// Задача найти все выполненные таски у первого todolist
так как это массив то обращаемся через filter

console.log(tasks[todolist_1].filter(t => t.isDone)) // (2)[{…}, {…}]

// Задача добавить в этот массив новую таску
console.log([...tasks[todolist_1], {id: '14', name: 'Redux', isDone: false}])  (3) [{…}, {…}, {…}]

console.log(tasks[todolist[1].id]) //0:{id: '24', name: 'Meat', isDone: true} 1: {id: '22', name: 'Milk', isDone: true}
мы ищем в объекте tasks какой-то ключ в [] чтобы его найти
нужно прочитать в массиве todolist id 1-го элемента то есть
tasks[todolist[1].id]

Из массива todolist мы никак не попадем в объект tasks мы просто увидим ключ
console.log(todolist[1].id) // 09834kdfjl

Это нужно чтобы отдельно получать список todolist и отдельно получать список тасок как endpoint

Загружаем приложение, загружаются только списки todolist
tasks мы не загружаем они хранятся в другой структуре так быстрее

Затем пользователь увидел список todolist с каким-то он захочет поработать и что-то нажмет
он тыкнет по какому-то конкретному todolist
как только он тыкнет по todolist мы определяем id этого todolist по которому пользователь нажал id: todolist_1,
потому что будет 3 todolist не нажатые и один нажатый значит у todolist на который пользователь нажал
мы у него берем id и идем с ней в объект tasks и говорим tasks[todolist_1]

const todolist_1 = '234lbjh'
const todolist_2 = '09834kdfjl'

const todolist = [
    {
        id: todolist_1,
        title: 'what to learn',
        filter: 'all',
    },
    {
        id: todolist_2,
        title: 'what to buy',
        filter: 'all',
    },
]

const getPropName = (param) => `${param}key`

const tasks = {
    [todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],
    [todolist_2]: [
        {id: '24', name: 'Meat', isDone: true},
        {id: '22', name: 'Milk', isDone: true},
    ],
}

Итак, для todolist мы создаем одно хранилище, один стейт todolist
Для тасок будет другой стейт tasks
Синхронизироваться tasks и todolist будут через переменную todolist_1
которая для todolist будет id: todolist_1,
а для объекта tasks ключом [todolist_1]: [
в котором будет лежать массив с тасками для этого todolist
а поскольку мы используем переменную для создания ключа [todolist_1]
то для создания такого ключа и для последующего обращения к нему
мы используем синтаксис [] или так называемое вычисляемое свойство объекта
такой синтаксис говорит о том что необходимо выражение которое находится внутри []
не использовать сразу в качестве ключа (строки) а вначале попробовать выполнить это выражение
если это переменная то эта переменная будет прочитана и содержимое этой переменной
будет использовано в качестве ключа в данном объекте

Поскольку ключ в этом объекте совпадает с id todolist то мы всегда совершая действия с todolist
можем всегда по id из объекта с тасками tasks подтягивать таски для этого todolist
*/
const todolist_1 = '234lbjh'
const todolist_2 = '09834kdfjl'

const todolist = [
    {
        id: todolist_1,
        title: 'what to learn',
        filter: 'all',
    },
    {
        id: todolist_2,
        title: 'what to buy',
        filter: 'all',
    },
]

const getPropName = (param) => `${param}key`

const tasks = {
    [todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],
    [todolist_2]: [
        {id: '24', name: 'Meat', isDone: true},
        {id: '22', name: 'Milk', isDone: true},
    ],
}
// Вычисляемые свойства объектов square brackets notation
// Работа со свойствами объекта с помощью квадратных скобок
console.log(tasks[todolist_1]) // 0: {id: '12', name: 'HTML', isDone: true} 1: {id: '13', name: 'CSS', isDone: true}
console.log(tasks[todolist_1][0]) //  {id: '12', name: 'HTML', isDone: true}
console.log(tasks[todolist_1][0].name) //  HTML или
console.log(tasks[todolist_1][0]['name']) //  HTML этот синтаксис используется для ключей с пробелами
// Задача найти все выполненные таски у первого todolist
console.log(tasks[todolist_1].filter(t => t.isDone)) // (2)[{…}, {…}]
// Задача добавить в этот массив новую таску
console.log([...tasks[todolist_1], {id: '14', name: 'Redux', isDone: false}]) // (3) [{…}, {…}, {…}]
console.log(tasks[todolist[1].id]) //0:{id: '24', name: 'Meat', isDone: true} 1: {id: '22', name: 'Milk', isDone: true}
console.log(todolist[1].id) // 09834kdfjl

/*
Коллекция - это не строгий термин.

в JS иногда называют массивоподобные итерируемые сущности которые
не являются массивами и к которым невозможно применять методы массивов
их также называют псевдо массивы
по нему можно пробежаться циклом но метод фильтр у него вызвать не можешь
но готовый метод map уже не катит

у функций есть такая внутренняя переменная arguments она тоже является псевдо массивом или коллекцией

в JS есть несколько реализаций концепций ассоциативного массива

Есть коллекция let map = new Map([['Ключ массива','Значение массива']])
в Map ключами могут быть не только строки
а в set только уникальные значения

Map - это ассоциативный массив, прародитель объекта в качестве ключей Map позволяет иметь не только строки
а например другие массивы или объекты или примитивы

Set - это тоже типо объект но Set хранит только уникальные значения
может удалять дублирующие элементы массива

как типизировать

const tasks = {
    [todolist_1]: [
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'CSS', isDone: true},
    ],
    [todolist_2]: [
        {id: '24', name: 'Meat', isDone: true},
        {id: '22', name: 'Milk', isDone: true},
    ],
}

type AllTasksType = {
    [key: string] : Array<TaskType>
}

reduce => свёртка => сократилка

Задача получить максимум массива
получить минимум массива
сумму всех элементов массива

получаем вместо множества значений какое-то одно, то есть сокращаем массив редуцируем его

в качестве параметра принимает callback функцию
фишка этого callback в том что в качестве параметра этот callback получает
аккумулирующее значение, то самое значение в которое мы хотим запихнуть весь наш массив
и вторым параметром очередной элемент массива

console.log(nums.reduce((acc, element) => {}))

На каждой итерации мы будем брать аккамулятор и добавлять туда элемент

console.log(nums.reduce((acc, element) => acc + element))

накидаем все элементы как в корзинку

А для того чтобы указать начальное значение в этом аккумуляторе reduce принимает еще один параметр после callback
который называется стартовое значение аккумулятора

console.log(nums.reduce((acc, element) => acc + element), 0)

со старта аккумулятор равен 0 element равен 1 функция возвращает 1

return у функции на предыдущей итерации автоматически помещается в значение аккумулятора на следующей операции

0 + 1 => 1 => acc(1) и идем на следующуй итерацию в acc теперь 1
1 + 2 => 3
3 + 3 => 6
6 + 4 => 10
поскольку следующего вызова функции нет то наша функция возвращает нам итоговое значение аккумулятора то есть 10

максимальное минимальное число в массиве можно находить через Math.max Math.min а если
массив с объектами то так уже не получится

Использование reduce с массивом объектов

Ищем сумму баллов всех студентов

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

console.log(students.reduce((acc, el) => acc + el.scores, 0)) // 394
el - это объект, acc - 0
итого сумма баллов свойств scores 394

Задача найти студента с самым большим количеством баллов
то есть вернуть нужно будет студента у которого больше всего баллов

console.log(students.reduce((acc, el) => ))

1 мы не передаем в качестве дополнительных параметров ничего и тогда
в качестве первого значения acc становится первый элемент массива то есть объект 'Bob'
а el становится второй объект 'Alex'

берем первый элемент массива, и проверяем у него количество баллов и если у него баллов больше чем у следующего элемента
то он у нас выходит на следующее сравнение и функция returnит такого студента, а если больше у el
то вернем el

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
// {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}

можно сделать так чтобы метод reduce мутабельно работал с данными а можно сделать так чтобы он работал не мутабельно

Например, используем reduce в стиле map

Задача получить новый массив где из свойств объектов students будут только name и age
______
как это сделать с помощью map
console.log(students.map(s => ({id: s.id, name: s.name})))

(4) [{…}, {…}, {…}, {…}]
0: {id: 1, name: 'Bob'}
1: {id: 2, name: 'Alex'}
2: {id: 3, name: 'Nick'}                                the same result
3: {id: 4, name: 'John'}
length: 4
______
как это сделать с помощью reduce
console.log(students.reduce(() => {}, [])) в качестве стартового параметра аккумулятора возмем пустой массив

console.log(students.reduce((arr, student) => {
    const reducedStudent = {id: student.id, name: student.name}
    arr.push(reducedStudent)
    return arr
}, []))

(4) [{…}, {…}, {…}, {…}]
0: {id: 1, name: 'Bob'}
1: {id: 2, name: 'Alex'}                                the same result
2: {id: 3, name: 'Nick'}
3: {id: 4, name: 'John'}
length: 4

То есть метод reduce возвращет то что захочешь, то что укажешь в качестве ззначения для acc вторым параметром
после callback
*/

const nums = [1,2,3,4]

// сумма всех элементов массива

console.log(nums.reduce((acc, element) => acc + element, 0)) // 10

const students = [
    {
        id: 1,
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        id: 2,
        name: 'Alex',
        age: 32,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        id: 3,
        name: 'Nick',
        age: 21,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false,
    },
]

console.log(students.reduce((acc, el) => acc + el.scores, 0)) // 394
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
// {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
console.log(students.map(s => ({id: s.id, name: s.name})))
/*
(4) [{…}, {…}, {…}, {…}]
0: {id: 1, name: 'Bob'}
1: {id: 2, name: 'Alex'}
2: {id: 3, name: 'Nick'}
3: {id: 4, name: 'John'}
length: 4
*/
console.log(students.reduce((arr, student) => {
    const reducedStudent = {id: student.id, name: student.name}
    arr.push(reducedStudent)
    return arr
}, []))
/*
(4) [{…}, {…}, {…}, {…}]
0: {id: 1, name: 'Bob'}
1: {id: 2, name: 'Alex'}
2: {id: 3, name: 'Nick'}
3: {id: 4, name: 'John'}
length: 4

*/

/*
Берем массив students и вырезаем у него id и используем в массиве newStudents эту id в качестве ключа
const students = [
    {
        id: 1,
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        id: 2,
        name: 'Alex',
        age: 32,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        id: 3,
        name: 'Nick',
        age: 21,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false,
    },
]

const newStudents = {
    '1': {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    '2': {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    }
}

в результате у нас получается пара, бывшая id как ключ, а оставшееся тело объекта как значение
и все это мы кладем в объект newStudents для более быстрого доступа к конкретному объекту по его 'id'
чтобы в случае когда у нас приходит гигантский массив с объектами не итерироваться по всему массиву тратя на это ресурсы
а получать прямой доступ к объекту

Чтобы получить из students newStudents нам нужно сократить массив до объекта

console.log(students.reduce((acc, student ) => {

}, {})) - указываем что на выходе хотим получить объект
на первой итерации у нас пустой объект
в нашем новом пустом объекте мы создадим ключ
acc[] значение ключа мы прочитаем у студента в поле id
acc[el.id] по этому ключу мы положим копию студента {...el}

console.log(students.reduce((acc, student ) => {
    acc[student.id] = {...student}
}, {}))

теперь надо у этого студента удалить id
потому что мы id перенесли в качестве ключа

в этом объекте который у нас лежит в объекте acc по ключу acc[student.id]
и мы в этом объекте удаляем свойство id
delete acc[student.id].id

и на каждой итерации мы должны вернуть acc

console.log(students.reduce((acc, student ) => {
    acc[student.id] = {...student}
    delete acc[student.id].id
    return acc
}, {}))

'1': {                   =       acc[student.id] = {...student}
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
*/

const newStudents = {
    '1': {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    '2': {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    }
}

// _____________________________________________________ Преобразуем массив в объект
console.log(students.reduce((acc, student ) => {
    acc[student.id] = {...student}
    delete acc[student.id].id
    return acc
}, {}))

/*
{1: {…}, 2: {…}, 3: {…}, 4: {…}}
1: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
2: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
3: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
4: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: false}
[[Prototype]]: Object
*/

/*
Преобразуем так же только id указываем типа string

console.log(mates.reduce((acc, student ) => {
    acc[student.id] = {...student}
    delete acc[student.id].id
    return acc
}, []))


[qw: {…}, er: {…}, rt: {…}, yu: {…}]
er: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
qw: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
rt: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
yu: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: false}
length: 0
[[Prototype]]: Array(0)

*/
const dudes = [
    {
        id: 'qw',
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        id: 'er',
        name: 'Alex',
        age: 32,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        id: 'rt',
        name: 'Nick',
        age: 21,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        id: 'yu',
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false,
    },
]

const newDude = {
    '1': {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    '2': {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    }
}

console.log(dudes.reduce((acc, student ) => {
    acc[student.id] = {...student}
    delete acc[student.id].id
    return acc
}, {}))

/*
{qw: {…}, er: {…}, rt: {…}, yu: {…}}
er: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
qw: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
rt: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
yu: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: false}
[[Prototype]]: Object
*/

console.log(dudes.reduce((acc, mate ) => {
    acc[mate.id] = {...mate}
    delete acc[mate.id].id
    return acc
}, []))

/*
[qw: {…}, er: {…}, rt: {…}, yu: {…}]
er: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
qw: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
rt: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
yu: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: false}
length: 0
[[Prototype]]: Array(0)
*/

/*let newMates = []

console.log(mates.reduce((acc, mate ) => {
    acc[mate.id] = {...mate}
    delete acc[mate.id].id
    newMates = acc
    return newMates
}, []))

console.log(newMates)
/!*
[qw: {…}, er: {…}, rt: {…}, yu: {…}]
er: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
qw: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
rt: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
yu: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: false}
length: 0
[[Prototype]]: Array(0)
*!/
console.log(mates[0]) // undefined
console.log(newMates[0]) // undefined
console.log(mates['er']) // undefined
console.log(mates['qw']) // undefined
console.log(newMates['er']) // {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
console.log(newMates['qw']) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}*/

const mates = [
    {
        id: 'qw',
        name: 'Bob',
        age: 34,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        id: 'er',
        name: 'Alex',
        age: 32,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        id: 'rt',
        name: 'Nick',
        age: 21,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        id: 'yu',
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false,
    },
]

const newMate = mates.reduce((acc, dude ) => {
    acc[dude.id] = {...dude}
    delete acc[dude.id].id
    return acc
}, [])
console.log(newMate) // [qw: {…}, er: {…}, rt: {…}, yu: {…}]
/*
[qw: {…}, er: {…}, rt: {…}, yu: {…}]
er: {name: 'Alex', age: 32, isMarried: true, scores: 89, isStudent: false}
qw: {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}
rt: {name: 'Nick', age: 21, isMarried: false, scores: 120, isStudent: false}
yu: {name: 'John', age: 19, isMarried: false, scores: 100, isStudent: false}
length: 0
[[Prototype]]: Array(0)
*/
console.log(newMate[0]) // undefined
console.log(newMate['qw']) // {name: 'Bob', age: 34, isMarried: true, scores: 85, isStudent: false}

/*
Чтобы пройтись по всем свойствам объекта как промапить массив нам нужен цикл for in
*/

// _______________________________________________________  модель reduce

function itReduce(func, startValue) {
    let acc = startValue
    for (let i = 0; i < this.length; i++) {
        acc = func(acc, this[i])
    }
    return acc
}

Array.prototype.itReduce = itReduce

console.log([1,2,3,4].itReduce((acc, el) => acc + el, 0 )) // 10





















