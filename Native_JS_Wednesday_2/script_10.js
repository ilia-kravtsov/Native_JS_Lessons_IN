/*
() => {} - этот callback будет вызван когда будет выполнен запрос на сервер 'https://somebd/user'

если у нас есть много таких запросов

fetch('https://library/authors', () => {

})

если будет ошибка мы ее обработаем если нет то мы берем data

fetch('https://library/authors', (err, data) => {
    if (err) console.log(err)
    else {

    }
    }

________________________________
мы делаем запрос на сервер, он нам возвращет promise (сервер обещает нам что-то вернуть)
сервер возвращает promise сразу же а результат выполнения операции придет когда сможет
либо этим результатом будет ошибка, либо данные которые мы запрашивали если с базой данных все сработало корректно

изначально мы получаем promise в статусе pending

promise.status = 'pending'

есть 3 статуса promise и только 3
1 pending - первоначальный (ожидание результата)
2 fullfield - (с результатом, приходит если все хорошо)
3 rejected - (с ошибкой, приходит если в бд возникла ошибка)

promise это объект, который так же имеет свои свойства и методы

когда мы получаем promise он имеет какой-то статус но этот статус мы не видим
мы не можем посмотреть этот статус но он есть внутри и JS по этому статусу понимает как работать дальше с нашим promise

promise.status = 'pending'

если Promise зарезолвился, то будет 'fullfield' - то есть видимо результат запроса вернулся

если возникнет ошибка бует 'rejected'

________________________________________________________________________________________________________________________
Создание Promise

const promise = new Promise(() => {})

const server = {
    getData() {
        const promise = new Promise(() => {})
        return promise
    }
}

console.log(server.getData())
________________________________________________________________________________________________________________________
Promise может принимать 2 функции resolve and reject

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {})
        return promise
    }
}
________________________________________________________________________________________________________________________
Когда наш Promise выполняется он вызывает одну из этих функций resolve or reject
чтобы вернуть нам нужную информацию (данные или error)

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('resolved'))
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()


Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
________________________________________________________________________________________________________________________
чтобы [[PromiseResult]]: undefined было не undefined нужно чтобы callback что-то return
________________________________________________________________________________________________________________________
Если мы вызовем функцию reject

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('someError') // script_10.js:101 Uncaught (in promise) someError
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "someError"
________________________________________________________________________________________________________________________

У promise внутри осуществляется логика и вызываются функции resolved rejected
если все прошло хорошо что вызывается функция resolved
если возникает ошибка вызывается функция rejected

в promise никогда не бывает чтобы вызывались и resolved и rejected
будет или rejected или resolved

promise всегда возвращает другой promise

у promisa есть статусы 1 2 3 и он возвращает или данные или ошибку

когда мы создаем новый promise new Promise((resolve, reject) => { мы пишем в нем какую-то логику }

например мы можем делать запрос fetch

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            fetch('https://google.com', (data) => { получаем данные от google и проверяем
                if (data) {
                    resolve(data) резолвим наш promise с data от google
                }
            })
        })
        return promise
    }
}

соответственно Promise перейдет в состояние fullfield
и data из resolve(data) перейдет в состояние [[PromiseResult]]: "и будет здесь"

если пошло что-то не так, мы не получили data, то мы вызываем reject
то есть либо promise зарезолвился с какими-то данными либо он заrеjectilся с какой-то ошибкой

потом в зависимости от того зареджектился или зарезолвился потом мы будем правильно эти данные обрабатывать

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            fetch('https://google.com', (data ) => {
                if (data) {
                    resolve(data)
                } else {
                    reject('someError')
                }
            })
        })
        return promise
    }
}
________________________________________________________________________________________________________________________

Обработка Promise

мы не имеем доступа к свойствам promise но с помощью методов promise мы можем их обрабатывать
мы можем получать данные или ошибку

3 метода обработки

then
catch
finally

как обрабатывать

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('data')
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

теперь мы можем обратиться к promise у него есть метод then
Если в promise вызовется функция resolve то результат этого вызова попадет в then

promise.then((resolve) => {
   console.log(resolve) - использование полученного от Promise результата
})

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('data')
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

promise.then((resolve) => {
    console.log('then', resolve) -> then data
})

________________________________________________________________________________________________________________________

then

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('data')
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

promise.then((resolve) => {
    console.log('then', resolve)
})
console.log(11)

11 в консоли покажется раньше чем then data
11
then data

то есть Promise нужен для того чтобы код продолжал выполняться пока тратится время на запрос на сервер и возврат данных
клиенту

чтобы код продолжал выполняться а UI отображаться и оставаться usable -
есть eventLook который работает с асинхронным кодом, соответственно можно работать через callback
можно работать через promise

Promise - это возврат данных или ошибки с сервера
Если promise возвращает данные с сервера то он меняет статус на fullfield и через метод then
мы можем получить доступ к ним

Если бы Promisa не было и мы бы ждали пока запрос уйдет на сервер и вернется назад с данными или ошибкой
то скрипт все это время бы стоял
то есть Promise просто делает асинхронный запрос

цепочка callback promise then catch finally и async await это все для работы с асинхронным кодом
работа с помощью callback это самый не удобный вариант (не читабельный)

promise с методами более удобна

async await еще более удобна

________________________________________________________________________________________________________________________

catch

catch нужен для того чтобы отловить ошибку
если в promise что-то пошло не так он вызовет функцию reject которая вернет нам ошибку
и эту ошибку мы можем отловить в методе catch

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('something went wrong')
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

promise.then((resolve) => {
    console.log('then', resolve)
})

promise.catch((err) => {
    console.error(err) // something went wrong
})

then в этом случае не выполнится потому что promise получил reject а не resolve

ошибку можно отловить и по другому

если в then сделать второй callback

promise.then((resolve) => {
    console.log('then', resolve)
 }, (err) => {
    console.error(err) // script_10.js:290 something went wrong
})

это допольнительный функционал then но его никто не использует
потому что если в promise состояние будет rejected то then не вызовется
поэтому второй callback с логикой для ошибки там не имеет смысла

Какой метод then или catch будет вызываться зависит от состояния promise
если он fullfield то вызывается then
если rejected то сработает catch

________________________________________________________________________________________________________________________

finally

выполнится в любом случае независимо от того зарезолвился promise или зареджектился

then data
script_10.js:341 finally

or

something went wrong
finally

если мы запрашиваем список из 100 пользователей
мы наживаем кнопку запроса в этотм момент мы можем поменять состояние Loader на true и отобразить крутилку loader
чтобы пользователь не нажимал по 100 раз на кнопку получить users 100 раз отправляя каждый раз запросы на сервер
чтобы такого не было когда user нажимает получить книги мы показываем loader
и пользователю понятно что надо ждать
далее мы не обязательно можем получить список этих книг, база данных может лежать
мы выводим человеку ошибку но перед этим в finally независимо от того зареджектился promise или зарезолвился
мы в finally убираем loader и дальше отображаем человеку или отображаем книги за которыми он делал запрос
или показываем ошибку

finally выполняется только после того как статус поменялся c pending на fullfield или rejected
он выполнится только тогда когда статус поменялся но он выполнится в любом случае
когда мы показываем пользователю крутилку Loader это значит что мы получили сразу в ответ от сервера
наш promise со статусом pending (ожидание) и только после того когда мы получим от сервера ответ по нашему promise
статус промиса поменяется, в зависимости от статуса выполнится или then или catch и в любом случае выполнится finally
потому что мы можем получить список книг или не получить его но loader на этот момент нужно убирать
и именно это удаение loader и делается в finally
и затем в зависимости от того что нам первнулось rejected или resolve показываем либо then либо catch
________________________________________________________________________________________________________________________
когда в promise сработал resolve тогда его статус меняется с pending на fullfield и в этом случае вызывается then
если же сработал reject статус меняется на rejected и вызывается метод catch

finally сработает по изменению статуса pending
________________________________________________________________________________________________________________________

сам promise создается на back мы пользуемся then catch finally

мы работаем с результатами Promise с помощью методов catch then finally

const server = {ё
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('data')
                reject('something went wrong')
            }, 2000)
        })
        return promise
    }
}

const promise = server.getData()

promise.then((resolve) => {
    console.log('then', resolve)
 })

promise.catch((err) => {
    console.error(err) // script_10.js:290 something went wrong
})

promise.finally(() => {
    console.log('finally')
})
________________________________________________________________________________________________________________________
но сам promise возвращает другой promise
и catch возвращает другой promise

const promise = server.getData()

const promise2 = promise.then((data) => {
    console.log('then', data)
})

data которая пришла с сервера ее не возвращает then мы с ней можем работать внутри then
но само выполнение then возвращает нам другой promise и мы на нем тоже можем делать then

promise2.then(() => {})

допустим мы получили в data список книг засетали этот список книг дальше нам нужно выбрать нужного автора в этом списке
книг
Для этого нужно сделать другой запрос но уже за конкретной книгой этого автора
соответственно во втором promise мы делаем другой запрос

promise2.then(() => {})

и когда мы получим результат второго resolve_2

promise2.then((resolve_2) => {
    то тогда уже обрабатываем результат второго promise
})

server.getData()
      .then((data) => {
      console.log('then', data)
      return data
})
     .then((resolve_2) => {
     fetch()
     console.log('then_2', resolve_2)
})
     .catch((err) => {
         console.log('catch', err)
     }).then(() => {
    console.log('then_3')
})

так как catch нам тоже возвращает promise то к результату его вызова мы так же можем добавить then_3

мы видим then_3 потому что любой из методов then then_2 catch нам возвращает новый promise
но так как в catch мы делаем console.log и не получаем никаких ошибок
соответственно этот promise который вернул catch зарезолвится
и соответственно вызовется then_3 и мы увидим в консоли then_3

допустим в catch мы получтм ошибку выведя не существующий параметр а в консоль

const server = {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('data')
                reject('something went wrong')
            }, 2000)
        })
        return promise
    }
}

server.getData()
      .then((data) => {
      console.log('then', data)
      return data
})
     .then((resolve_2) => {
     fetch()
     console.log('then_2', resolve_2)
})
     .catch((err) => {
         console.log('catch', err)
         console.log(a)
     }).then(() => {
    console.log('then_3')
})
    .catch((err) => {
        console.log('catch_2', err)
    })

так как мы в catch пытаемся обратиться к не существующей переменной в этом случае возращаемый этим catch - promise
зареджектился и значит что ошибка попадет во второй catch и мы увидим в консоли

catch something went wrong
catch_2 ReferenceError: a is not defined

ни в какой из then мы не попадаем

then выполняется только тогда когда из promise возвращается resolve то есть тогда когда есть data
catch мы видим тогда когда из promise возвращается rejected то есть когда возвращается ошибка

а если второй catch не вернет ошибку то then_3 вернет then_3
server.getData()
      .then((data) => {
      console.log('then', data)
      return data
})
     .then((resolve_2) => {
     fetch()
     console.log('then_2', resolve_2)
})
     .catch((err) => {
         console.log('catch', err)
             //console.log(a)
     }).then(() => {
    console.log('then_3')
})
    .catch((err) => {
        console.log('catch_2', err)
    })

    в консоли увидим

    catch something went wrong
    then_3

    потому что возращаемый первым catch promise - вернул resolve - зарезолвился - так как не произошло ошибок
________________________________________________________________________________________________________________________

    передаем данные из catch в следующий then
    если мы из 1 catch return 'some string' то эти данные в случае resolve передадутся следующему promise

    server.getData()
      .then((data) => {
      console.log('then', data)
      return data
})
     .then((resolve_2) => {
     fetch()
     console.log('then_2', resolve_2)
})
     .catch((err) => {
         console.log('catch', err)
             //console.log(a)
         return 'some string'
     }).then((data) => {
    console.log('then_3', data)
})
    .catch((err) => {
        console.log('catch_2', err)
    })

    в консоли увидим

    catch something went wrong
    then_3 some string

    а если return не было бы то в then в качестве data перешло бы значение undefined

________________________________________________________________________________________________________________________

если во втором catch выдадим ошибку то дальше программа не пойдет в then она пойдет во второй catch
и мы увидим

catch something went wrong
catch_2 ReferenceError: a is not defined

________________________________________________________________________________________________________________________

then можно использовать только после promise

________________________________________________________________________________________________________________________

как упростить начальную запись

fetch('https://library/authors', (err, data) => {
    if (err) {
        console.log(err)
        return
    } else {
        fetch('https://library/authors/5', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                fetch('https://library/authors/5/books', (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fetch('https://library/authors/5/books/6', (err, data) => {
                            if (err) {
                                console.log(err)
                            } else {

                            }
                        })
                    }
                })
            }
        })
    }
})

next

fetch('https://library/authors')
    .then((data) => {
        fetch('https://library/authors/5')
    })
    .then((data) => {
        fetch('https://library/authors/5/books')
    })
    .then((data) => {
        fetch('https://library/authors/5/books/6')
    })
     .catch((err) => {
        console.log('catch err', err)
    })

    catch отловит ошибку на любом из этих promise (then)
    в случае если в каждом запросе будет resolve то catch вообще не отработает
    если после этого добавить finally то finally отработает в любом случае

________________________________________________________________________________________________________________________

Задача

Напишите функцию delay(ms) которая возвращает promise переходящий в состояние resolved через ms секунд

function delay(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

delay(2000).then(() => console.log('Hello!'))
________________________________________________________________________________________________________________________
Задача

увидеть в консоли 1 и через 2 секунды 2

function delay_2(n) {
    console.log(n)
    return setTimeout(() => {
        console.log(n+1)
    }, 2000)
}

delay_2(1)

она же

function delay_2(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {res()}, ms)
    })
}

const fincAsync = async () => {
    console.log(1)

    await delay_2(2000)

    console.log(2)
}

fincAsync()

она же

function delay_2(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {res()}, ms)
    })
}
    console.log(1)
    delay_2(2000).then(() => console.log(2))

 */

// const server = {
//     getData() {
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 //resolve('data')
//                 reject('something went wrong')
//             }, 2000)
//         })
//         return promise
//     }
// }
//
// const promise = server.getData()
//
// fetch('https://library/authors')
//     .then((data) => {
//         fetch('https://library/authors/5')
//     })
//     .then((data) => {
//         fetch('https://library/authors/5/books')
//     })
//     .then((data) => {
//         fetch('https://library/authors/5/books/6')
//     })
//     .catch((err) => {
//         console.log('catch err', err)
//     })

// function delay(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//         }, ms)
//     })
// }
//
// delay(2000).then(() => console.log('Hello!'))

function delay_2(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {res()}, ms)
    })
}


    console.log(1)

    delay_2(2000).then(() => console.log(2))




// server.getData()
//       .then((data) => {
//       console.log('then', data)
//       return data
// })
//      .then((resolve_2) => {
//      fetch()
//      console.log('then_2', resolve_2)
// })
//      .catch((err) => {
//          console.log('catch', err)
//              console.log(a)
//          return 'some string'
//      }).then((data) => {
//     console.log('then_3', data)
// })
//     .catch((err) => {
//         console.log('catch_2', err)
//     })


// const promise2 = promise.then((data) => {
//     console.log('then', data)
// })

// promise2.then((resolve_2) => {
//     console.log('then_2', resolve_2)
// })
/*
Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
 */



// fetch('https://library/authors', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     } else {
//         fetch('https://library/authors/5', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 fetch('https://library/authors/5/books', (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         fetch('https://library/authors/5/books/6', (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// promise.status = 'pending'