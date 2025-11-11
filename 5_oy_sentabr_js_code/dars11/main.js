// let student = {
//     ism: "Kimdur",
//     yosh: 20,
//     email: "email@gmail.com"
// }

// console.log(student["ism"])
// console.log(student.ism)

// function toBinary(n) {
// 	let binary = ''

// 	for (let i = 0; i <= 5; i++) {
// 		if (n > 0) {
// 			binary = (n % 2) + binary
// 			n = Math.floor(n / 2)
// 		}
// 	}
//     console.log(binary)
// }
// toBinary(5)

let arr = [2, 3, 5, 7, 10]

// for(let i = 0; i < arr.length; i ++) {
//     console.log(arr[i])
// }

// for(let i of arr) {
//     console.log(i)
// }

let students = ['Alisher', 'Sanjarbek', 'Musobek']

// for(let student of students){
//     console.log(student);
// }

// for(let student in students) {
//     console.log(students[student])
// }

// function sumArray(arr) {
//     let result = 0
//     for(let n of arr) {
//         result += n
//     }
//     console.log(result)
// }

// sumArray([2, 5, 7, 1])

// function square(n){
//     return n ** 2
// }

// function sum(callback, n2) {
//     let kvadrat = callback(5)
//     console.log(kvadrat + n2)
// }

// sum(square, 10)
// function hello(ism) {
//     return "hello " + ism
// }
// function ism(call) {
//     let natija = call("Sarvarbek")
//     console.log(natija)
// }

// ism(hello)

// function juftToq(son) {
//     if(son % 2 == 0) {
//         return true
//     }else {
//         return false
//     }
// }

// function checkNumber(callback, raqam) {
//     let natija = callback(raqam)
//     if(natija) {
//         console.log("Juft")
//     }else{
//         console.log("Toq");
//     }
// }
// checkNumber(juftToq, 20)

// function checkLength(text, callback) {
//     let natija = callback(text)
//     console.log(natija);
// }
// checkLength("nimadur", (text) => text.length)

// let arr1 = [2, 3, 4]
// let arr2 = [5, 6, 7]

// arr1 = [...arr1, ... arr2]
// console.log(...arr1);

// function checkMax(arr, call) {
//     let maximum = call(arr)
//     setTimeout(() => {
//         console.log(maximum)
//     }, 3000)
// }

// checkMax([2, 3, 4, 1, 10], (arr) => Math.max(...arr))

// console.log(10)

// setInterval(() => {
//     console.log(11)
// }, 5000)
// setTimeout(() => {
//     console.log(11)
// }, 2000)
// console.log(12)

// function ism(ism, callback) {
//     let hello = callback(ism)
//     setTimeout(() => {
//         console.log(hello)
//     }, 2000)
// }

// ism("Kimdur", (name) => "hello " + name)

function qadam1(cb) {
	setTimeout(() => {
		console.log('1-qadam')
        cb()
	}, 2000)
}

function qadam2(cb) {
	setTimeout(() => {
        console.log('2-qadam')
        cb()
	}, 2000)
}

function qadam3(cb) {
	setTimeout(() => {
		console.log('3-qadam')
        cb()
	}, 2000)
}

qadam1(() => {
    qadam2(() => {
        qadam3(() => {
            setTimeout(() => {
                console.log("Hamma qadam bosildi")
            }, 2000)
        })
    })
})