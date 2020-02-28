'use strict'

// function declaration / statement
function add(a, b) {
    return a + b
}

// named function expressions
var addExpression = function addExpression(a, b) {
    return a + b
}

// anonymous function expressions
var addAnonymousExpression = function (a, b) {
    return a + b
}

var func1 = function namedFunction(a, b) {
    return a + b
}
var func2 = func1

console.log(func1)
console.log(func2)
console.log(func1 === func2)

var func3 = function (a, b) {
    return a + b
}
var func4 = func3

console.log(func3)
console.log(func4)
console.log(func3 === func4)

// this throw ReferenceError
// because name of named functions
// is not available in global scope
// so it is commented
// console.log(namedFunction)

// typeof event when variable is never defined
// it returns undefined not ReferenceError
console.log(typeof namedFunction)

var namedFunctionVariable = function nameOfFunc(){
    // named function name is available in local
    // scope of that function, not in scopes above like global
    console.log(nameOfFunc)
}

console.log(typeof nameOfFunc) // undefined

// it logs function by name
namedFunctionVariable()