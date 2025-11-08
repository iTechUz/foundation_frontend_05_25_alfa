// //  --->>> HOISTING

// // console.log(a)

// let a = 10
// // nimadur()

// function birnima() {
//     let a = 20
// }

// function nimadur(){
//     let a = 30

// }
// nimadur()

// {
//     let a = 32
// }
// console.log(a)

/*
Global Scope
Function Scope
Block Scope
*/

// let name = "Alisher"

// function sayHello(){

//     let salom = "Hello"

// }
// sayHello()
// console.log(salom, "Alisher")

// console.log(x);

// let x = 10

// function test(){
//     console.log(x)
//     let x = 20 //  Temporal Dead Zone --> TDZ
// }
// test()

// let message = 'Global'
// function show() {
// 	let message = 'Local'
//     console.log(message)
// }
// show()

// function sum() {
//     let count = 0
//     count ++
// }
// sum()
// console.log(count);

// Closure (Yopilish)

// function outer () {
//     let count = 0

//     function inner(){
//         count ++
//         console.log(count)
//     }
//     return inner
// }
// let out = outer()
// out()
// out()
// out()

// Pure Function
// Impure functions

// Pure Function

// function sum(a, b){
//     return a + b
// }

// console.log(sum(4, 3))
let a = 0

// Impure function
// function sum(b){
//     a += b
// }
// sum(10)
// console.log(a)

// function counter() {
//     let count = 0

//     function inner() {
//         count ++
//         return count
//     }
//     return inner
// }

// let counterFunc = counter()
// console.log(counterFunc())
// console.log(counterFunc())
// console.log(counterFunc())

// Date --> built-in-class
// let now = new Date()
// let now = new Date('2025-10-08')
// let now = new Date(2025, 10 - 1, 8, 16, 32, 0)
let now = new Date()

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1)
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())
// console.log(now.getTime())

// Bugun: 2025 yil, 10 oy, 8 kun. Soat: 16:40
// console.log(
// 	`Bugun ${now.getFullYear()} yil, ${now.getMonth()} oy, ${now.getDate()} kun. 
// Soat: ${now.getHours()}:${now.getMinutes()}`,
// )

function countAge(birthYear) {
    let now = new Date().getFullYear()
    console.log(`Siz ${now - birthYear} yoshdasiz`)
}
countAge(1998)
