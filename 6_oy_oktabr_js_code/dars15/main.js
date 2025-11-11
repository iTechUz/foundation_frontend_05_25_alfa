// // Ma'lumotlar tuzilmasi --> DS --> DataStructures

// // Set --> WeakSet --> Map --> WeakMap --> Ma'lumotlar tuzilmasi
// // let array = [2, 3, 5, 4, 5, 2]

// // let numSet = new Set(array)

// // console.log(numSet)
// // console.log(numSet.size)
// // console.log(numSet.has(4))
// // console.log(numSet.has(4))
// // console.log(numSet.add(10))
// // console.log(numSet.delete(2))
// // console.log(numSet.clear())
// // console.log(numSet)

// // function removeDuplicate(arr) {
// // 	let numSet = new Set(arr)
// // 	let result = [...numSet]

// // 	return result
// // }
// // console.log(removeDuplicate(array))

// // let arr1 = [2, 3, 5, 4,]
// // let arr2 = [4, 9, 10, 15, 3]
// // function findSimilar(massiv1, massiv2) {
// //     let result = []
// //     let set1 = new Set(massiv1)
// //     for(let n of massiv2) {
// //         if(set1.has(n)) {
// //             result.push(n)
// //         }
// //     }
// //     console.log(result)

// // }

// // findSimilar(arr1, arr2) // --> [4, 3]

// let users = new Set()

// function login(username) {
// 	users.add(username)
// 	console.log(username, 'logged in')
// }

// function logout(username) {
// 	users.delete(username)
// 	console.log(username, 'logged out')
// }

// function showResult() {
// 	console.log([...users])
// }

// // login('Javohirbek')
// // login('Otkirbek')
// // login('Sarvarbek')
// // logout('Javohirbek')

// // showResult()

// // let arr1 = [2, 3, 5, 4]
// // let arr2 = [4, 9, 10, 15, 3]

// // function findDifferent(arr1, arr2) {
// //     let set1 = new Set(arr1)
// //     let res = []
// //     for (let n of arr2) {
// //         if(!set1.has(n)) {
// //             res.push(n)
// //         }
// //     }
// //     console.log(res)

// // }

// // findDifferent(arr1, arr2) // --> [9, 10, 15]

// // --> WeakSet 



// // let weakSet = new WeakSet()

// // console.log(weakSet.add(user))
// // console.log(weakSet)
// // console.log(weakSet.has(user))
// // console.log(weakSet.size)
// // console.log(weakSet.delete(user))
// // user = null
// // console.log(weakSet.has(user))



// let weakSet = new WeakSet()


// function addUser(user){

//     return weakSet.add(user)

// }

// function isExist(user) {
//     return weakSet.has(user)
// }

// let user = {
//     name: "Kimboy"
// }

// let res = addUser(user)
// console.log(res)

// let res2  = isExist(user)

// console.log(res2)

// user = null

// let userInfo = {
//     usernam: "Username"
// }

// login(userInfo) // --> login success
// login(userInfo) // already logged in
// userInfo.name = "User"
// login(userInfo) // login success
// yagonaHarflarSoni("Programmingp") // --> 3ta bir xil harf mavjud





console.log("Musobek")

/*

*
**
***
****
*****

*/


























