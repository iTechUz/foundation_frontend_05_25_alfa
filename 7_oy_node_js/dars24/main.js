// function plus(a, b) {
//     return a + b
// }
// console.log("hello")
// module.exports = plus


let Maktab = require("./main2.js")

let maktab = new Maktab()

maktab.addStudent("O'tkirbek", 14, "erkak")
maktab.addStudent("Javohir", 14, "erkak")


maktab.addStudent("Shodiyor", 14, "erkak")

let talabalar = maktab.readStudents('./data.json')
let talaba = maktab.findStudent("Shodiyor")
console.log(talaba)