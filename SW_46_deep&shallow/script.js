let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'Artem',
            age: 239
        }
    }
}

let b = 18
let c = b
console.log(c+2) // 20
console.log(b)   // 18

let d = a
d.name = 'ilia'
console.log(a.name) // ilia
console.log(d.name) // ilia

let e = a
e.name = 'petr'
console.log(e.name) // petr
console.log(a.name) // petr
e.students.push('Artem')
console.log(e.students) // (4) ['ivan', 'andrey', 'farid', 'Artem']
console.log(a.students) // (4) ['ivan', 'andrey', 'farid', 'Artem']

let f = {...a} // shallow copy - примитивы 1 уровня вложенности станут независимыми сложные типы данных будут зависимы
f.name = 'evlampiy'
console.log(f.name) // evlampiy
console.log(a.name) // petr
f.students.push('Evgeniy')
console.log(e.students) // (5) ['ivan', 'andrey', 'farid', 'Artem', 'Evgeniy']
console.log(a.students) // (5) ['ivan', 'andrey', 'farid', 'Artem', 'Evgeniy']

// deep copy
let g = {...a} // shallow copy a
g.classroom = {...a.classroom} // shallow copy a classroom
g.classroom.teacher = {...a.classroom.teacher} // shallow copy a teacher
    g.classroom.teacher.name = 'alex'
    console.log(g.classroom.teacher.name) // alex
    console.log(a.classroom.teacher.name) // Artem - as i said примитивы не зависимы, сложные типы данных зависимы
g.students = [...a.students] // для массива students это уже deep copy остались только примитивы, а они независим и будут изменяться отдельно
    g.students.push('anna')
    console.log(g.students) // (6) ['ivan', 'andrey', 'farid', 'Artem', 'Evgeniy', 'anna']
    console.log(a.students) // (5) ['ivan', 'andrey', 'farid', 'Artem', 'Evgeniy']

/*
let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'Artem',
            age: 239
        }
    }
}

Если после копирования f = {...a} в объекте a остались сложные типы данных а не только примитивы,
то эти сложные типы данных будут изменяться при внесении изменений как в a так и в f

-> shallow copy
let f = {...a}
e.students.push('Artem')
    console.log(e.students) // (4) ['ivan', 'andrey', 'farid', 'Artem']
    console.log(a.students) // (4) ['ivan', 'andrey', 'farid', 'Artem']

-> deep copy
а если при копировании остались только примитивы то они ссылки уже будут независимыми
let g = {...a}
g.students = [...a.students]
g.students.push('anna')
    console.log(g.students) // (6) ['ivan', 'andrey', 'farid', 'Artem', 'Evgeniy', 'anna']
    console.log(a.students) // (5) ['ivan', 'andrey', 'farid', 'Artem', 'Evgeniy']
 */
