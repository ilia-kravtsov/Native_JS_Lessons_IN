function outerFunction(x) {
    return function innerFunction(y) {
        return x + y
    }
}

const add5 = outerFunction(5)

console.log(add5(3)) // 8