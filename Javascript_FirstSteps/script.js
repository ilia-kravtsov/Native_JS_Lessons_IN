/*
    У нас есть различные типы данных, для того чтобы с ними работать нам нужно дать им какие-то имена
    Имена в JS создаются с помощью переменных

    Функции это микропрограммы, не большой участок кода который предназначен для выполнения микрозадачи

    Создаем базовые настройки

     const settings = {
        min: 0,
        max: 100,
        attempts: 10,
    }

    Math.random() - вернет нас случайное число

      function getRandomNumber() {
        const number = Math.random()
    }

     const number = Math.random() * 100 - умножаем для того чтобы число возвращалось от 0 до 100
     но * 100 будет возвращать нам дробное число, а нам нужно целое поэтому

     Math.round(Math.random() * 100) для округления 3.45 он округлит в 3

     В имени функции нужно использовать глагол чтобы указать действие которое она выполняет

     function getRandomNumber() {
        const number = Math.round(Math.random() * 100)
        return number
    } - объявление фукнции
    getRandomNumber() - вызов функции

    function game(objSettings, number, userName) { - параметры функции

    }

    game(settings, randomNumber, userName) - аргументы функции
*/

    const settings = {
        min: 0,
        max: 100,
        attempts: 10,
    }

    function getRandomNumber() {
        const number = Math.round(Math.random() * 100)
        return number
    }

    function getUserName() {
        let condition = true
        let name;
        while(condition) {
            name = prompt('Твое имя друг?', '')
            if (name) {
                condition = false
            } else {
                alert('Пиши не выпендривайся')
            }
        }
        return name
    }

    const userName = getUserName()
    const randomNumber = getRandomNumber()

    function game(objSettings, number, userName) {
        const answers = []
        alert(`Привет, ${userName}!
        Я загадал число в интервале от ${objSettings.min} до ${objSettings.max}.
        У тебя есть ${objSettings.attempts} попыток отгадаеть его. Го?`)

        for (let index = 0; index < objSettings.attempts; index++) {
            const answer = prompt('Давай свой варик, введи число', '')
            answers.push(answer)
                if (answer > number) {
                    alert(`Мое число меньше. Осталось ${objSettings.attempts - index - 1} попыток.
                    ${answers.join()} `)
                } else if (answer < number) {
                    alert(`Мое число больше. Осталось ${10 - index - 1} попыток
                    ${answers.join()} `)
                } else {
                    alert('You win!')
                    return
                }
            }
        alert('You lose, с тебя 10 баксов!')
    }

    game(settings, randomNumber, userName)





























/*

*/
/*

*/
/*

*/