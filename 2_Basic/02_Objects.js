const mySum = Symbol("key1")

const JsUser = {
    name : "Ateeb", 
    [mySum]: "myKey 1",
    age : 82,
    location :"Delhi",
    email: "ilove69@gmail.com",
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySum])

Object.freeze(JsUser)