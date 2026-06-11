const user = {
    username : "Abdullah",
    print: 6999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to !!! WEBSITE !!!`)
        console.log(this)
    }

}
// user.welcomeMessage()
const chai = () => {
    let username = "Ateeb"
    // console.log(this.username)
    // console.log(this)
}

chai()

// const add2 = (num1, num2) =>{
//     return num1 + num2
// }

const add2 = (num1 , num2) => (num1 + num2)

console.log(add2(66, 3));

// IIFE
// important before IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Ateeb')