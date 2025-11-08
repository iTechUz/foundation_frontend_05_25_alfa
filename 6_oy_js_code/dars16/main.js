// let user = new Map([
// 	['name', 'Javohir'],
// 	['age', 14],
// ])

// // console.log(user)

// user.set('surname', "Nuraliyev")
// // console.log(user);
// // let username = user.get('name')
// // console.log(username);
// // console.log(user.size)
// // console.log(user.has("name"))

// // user.delete('name')
// // console.log(user);

// // user.clear()
// // console.log(user)

// let objKey = {
//     id: 1
// }

// user.set(objKey, "Bu object kalit")
// // console.log(user)
// // console.log(user.get(objKey))

// let funcKey = () => {} // --->> arrow function
// // // let funckey = function() {} //--->> expression function
// // // function FuncKey(){} // --->> declaration function

// user.set(funcKey, "Bu function key")
// // let func = user.get(funcKey)
// // console.log(func)

// // numberKey = 46

// // user.set(numberKey, "Bu number key")
// // console.log(user)

// // let num = user.get(46)
// // console.log(num)

// // let strKey = "kalit"
// // user.set(strKey, 'qiymat')

// // console.log(user)
// // console.log(user.get('kalit'))

// // let arr = [21, true, "asnimadur", {}, []]

// // for(let n of arr) {
// //     console.log(n)
// // }

// // console.log(user)

let mevalar = new Map()
mevalar.set('olma', 10000)
mevalar.set('banan', 20000)
mevalar.set('olcha', 5000)
mevalar.set('shaftoli', 7000)
mevalar.set('orik', 9000)
// console.log(mevalar)

// let chelak = []
// for(let [key, value] of mevalar) {
//     if(value < 10000){
//         chelak.push (key)
//     }

// }

// console.log(chelak)

function checkUnical() {
	let str = 'hello  bro bro hello how how are are you you'

	str = str.split(' ')

	let resultMap = new Map()

	for (let soz of str) {
		resultMap.set(soz, (resultMap.get(soz) || 0) + 1)
	}
    let unical = ""
	for (let soz2 of str) {
		if (resultMap.get(soz2) == 1) {
			unical = soz2
		}
        
	}
    return unical
}

console.log(checkUnical())


let user = {name: "kim"}
let weakmap = new WeakMap()
console.log(weakmap.set(user))
console.log(weakmap.has(user))


user = null
console.log(weakmap.has(user))
let map = new Map()
let son = 42
map.set(son, "Son")
console.log(map.has(son))
son = null
console.log(map.has(42))
