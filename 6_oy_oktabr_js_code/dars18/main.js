// // OOP --> Object Oriented Porgramming --> Obyektga Yo'naltirilgan Dasturlash

// class Car {
//     constructor(brand, color, year) {
//         this.brand = brand
//         this.color = color
//         this.year = year
//     }

//     starter() { // -->> start metodi.
//         console.log("bm bm bm")
//     }

//     off() {
//         console.log("Switched off")
//     }
// }

// let car = new Car("bmw", "qora", "2025")

// console.log(car.brand)
// car.starter()
// car.off()

// class Calculator {

//     plus(a, b) {
//         return a + b
//     }

//     minus(a, b) {
//         return a - b
//     }

//     multiply(a, b) {
//         return a * b
//     }

//     divide(a, b) {
//         return a / b
//     }
// }

// let calc = new Calculator()

// let sum = calc.plus(5,4)
// let minus = calc.minus(6, 2)
// let multiply = calc.multiply(2, 2)
// let divide = calc.divide(6, 3)
// console.log(sum)
// console.log(minus)
// console.log(multiply)
// console.log(divide)

// class Array {
// 	push(arr, data) {
// 		arr[arr.length] = data
// 		return arr
// 	}

// 	find(arr, data) {
// 		for (let i of arr) {
// 			if (i == data) {
// 				return 'Topildi'
// 			}
// 		}
// 		return null
// 	}

// 	sort(arr) {
// 		let curr = 0
// 		for (let j = 0; j < arr.length - 1; j++) {
// 			for (let i = 0; i < arr.length - j - 1; i++) {
// 				if (arr[i] > arr[i + 1]) {
// 					curr = arr[i]
// 					arr[i] = arr[i + 1]
// 					arr[i + 1] = curr
// 				}
// 			}
// 		}
// 		return arr
// 	}
// }

// let arr = new Array()

// let sonlar = [2, 5, 6, 10, 3, 20, 7]
// // let sonlar2 = arr.push(sonlar, 1)
// // let found = arr.find(sonlar, 1)
// let sorted = arr.sort(sonlar)

// // console.log(sonlar)
// // console.log(found)

// console.log(sorted)

// class Person {
//     constructor(name, age, profession) {
//         this.name = name
//         this.age = age
//         this.profession = profession
//     }

//     tellProf() {
//         console.log(this.profession)
//     }
// }
// let person = new Person("Bilol", 22, "dasturchi")

// person.tellProf()


// // -------------------->>>>> Meros olish(inheritance) <<<<<------------------------------

// class OtaMushuk {
//     constructor(rangi, geni, ves) {
//         this.rangi = rangi
//         this.geni = geni
//         this.ves = ves
//     }

//     miyov() {
//         console.log("miyov")
//     }
// }
// let ota = new OtaMushuk("oq", "jaydari", "5kg")
// console.log(ota)
// ota.miyov()


// class BolaMushuk extends OtaMushuk {
//     miyov() {
//         super.miyov()
//         console.log("vauv")
//     }

//     color() {
//         console.log(this.rangi)
//     }

//     sayMiyav() {
//         this.miyov()
//     }
// }


// let bola = new BolaMushuk("oq", "jaydari", "8kg")
// console.log(bola)
// bola.miyov()
// bola.color()
// bola.sayMiyav()

class User{
    #name
    _water_amount = 0
    constructor(ism , age) {
        this.#name = ism
        this.age = age
    }
    set setName(ism) {
        console.log(this.#name)
        this.#name = ism
        console.log(this.#name)
    }

}

let user = new User("Ali", 25)
console.log(user)
user.name = "Vali"
// user.age = 30
// console.log(user)
// console.log(user._water_amount)
// user.first_name = "Hasan"
// console.log(user.first_name)
user.setName = "Husan"
console.log(user)