/*
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в строке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true
 */

function repeatString(str, repeatCount, def) {
  let result = ''
  for (let i = 0; i < repeatCount; i++) {
      result += str + def
  }
  result = result.slice(0, -1)
  return result
}

console.log(repeatString("yo", 3, "! "))

function checkStart(str, preStr) {
  let result = ''
  for (let i = 0; i < preStr.length; i++) {
      result += str[i]
  }
  return result.toUpperCase() === preStr.toUpperCase()
}

console.log(checkStart("Incubator", "yo"))

function truncateString(str, num) {
  let result = ''
  for (let i = 0; i < num; i++) {
      result += str[i]
  }
  return `${result}...`
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

function getMinLengthWord(str) {
  let start = str.split(' ')
  return start.reduce((a, c) => c.length < a.length ? c : a, start[0])
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

function setUpperCase(str) {
  return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ')
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в строке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

function isIncludes(str, find) {
  let preFind = find.toLowerCase()
  preFind = [...new Set(preFind)].join('');
  let preStr = str.toLowerCase()
  let divFind = preFind.split('')
  let divStr = preStr.split('')
  let compare = divStr.filter(el => divFind.includes(el))
  return divFind.join(' ') === compare.join(' ')
}


console.log(isIncludes("Incubator", "Incubatorrr")) // true