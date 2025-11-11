// function juftToq(num) {
//     if(num % 2 == 0) {
//         return "Juft son"
//     }else {
//         return "Toq son"
//     }
// }

// function checkEl(arr, call) {
//     for(let num of arr){
//         let isPrime = call(num)
//         console.log(isPrime)
//     }
// }

// checkEl(numbers, juftToq)

// let numbers = [2, 10, 21, 23, 56, 119, 15]
// function isFizzBuzz(num) {
// 	if (num % 5 == 0 && num % 3 == 0) {
// 		return 'FizzBuzz'
// 	} else if (num % 5 == 0) {
// 		return 'Fizz'
// 	} else if (num % 3 == 0) {
// 		return 'Buzz'
// 	} else {
// 		return 'Nothing'
// 	}
// }

// function checkEl(nums, callback) {
// 	for (let num of nums) {
// 		let isFizzBuzz = callback(num)
//         console.log(isFizzBuzz)
// 	}
// }

// checkEl(numbers, isFizzBuzz)

// function smallest(numbers) {
//     let kichik = numbers[0]

//     for(let num of numbers) {
//         if(num < kichik) {
//             kichik = num
//         }
//     }
//     console.log(kichik)
// }
// smallest(numbers)

// function isReverse(num) {
//     let natija = 0
//     while(num > 0) {
//         natija = natija * 10
//         natija = natija + (num % 10)
//         num = Math.floor(num / 10)
//     }
//     return natija
// }

// function checkEl(numbers, callback) {
//     for(let num of numbers) {
//         let reversed = callback(num)
//         console.log(reversed)
//     }
// }
// checkEl(numbers, isReverse)

let numbers = [1111, 10, 21, 23, 56, 1, 119, 15, 549219]

function sum(num) {
	let natija = 0
	while (num > 0) {
		natija = natija + (num % 10)
		num = Math.floor(num / 10)
	}
	return natija
}

function checkEl(numbers, call) {
	for (num of numbers) {
		let sum = call(num)
		console.log(sum)
	}
}
// checkEl(numbers, sum)

let salaries = {
	Alisher: 100,
	Sanjarbek: 1200,
	Shodiyor: 150,
	Javohir: 1500,
	Otkirbek: 1200,
	Musobek: 300,
	Suhrob: 300,
}

function overallSum(obj) {
	let result = 0

	for (let key in obj) {
		result = result + obj[key]
	}
	return result
}
let res = overallSum(salaries)

console.log(res)

// {
//     salom: 4,
//     dunyo: 1,
//     qalay: 1,
//     ishlar: 2,
//     yaxshi: 1
// }
let str = 'salom salom dunyo salom qalay ishlar ishlar yaxshi salom'

function masala(str) {
	str = str.split(' ')
	let res = {}
	for (let i of str) {
		if (res[i]) {
			res[i]++
		} else {
			res[i] = 1
		}
	}
    console.log(res);
    
}
masala(str)
