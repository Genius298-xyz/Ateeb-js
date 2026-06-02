// Primitive : 7 categories
/*
String , number , null,boolean,  undefined , symbol(for making unique ), bigInt
 */

const id = Symbol('69')
const anotherId = Symbol('69')

console.log(id == anotherId)

const bigNum = 12345006789n // bigInt

// Reference (Non primitive)

// Array , objects , functions

const heros = ["shaktimaan", "Ironman", "Johny Since"]
let myObj = {
    name :"hitesh",
    age : 22,
}

const myFunc = function(){
    console.log("This is my func")
}

console.log(typeof myObj)