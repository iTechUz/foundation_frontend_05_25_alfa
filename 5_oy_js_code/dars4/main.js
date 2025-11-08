// let x = 9
// let y = 3
// console.log(!(x == y))



// /*
// Uch xonali son berilgan. Uning raqamlarining yig‘indisini toping. (masalan: 123 → 1+2+3 = 6).

// */

// let son = 123 // --> 27
// let natija = 0
// natija += son % 10
// son = Math.floor(son / 10)
// natija += son % 10
// son = Math.floor(son / 10)
// natija += son % 10
// console.log(natija)



// let arr = [true, 123, "nimadur" ]
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr.length)
// console.log(typeof arr)
// console.log(arr[11])

// console.log(arr.at(1))

// console.log(arr.join("_"))
// let res = arr.pop()
// console.log(arr, res)
// arr.push(1000)
// console.log(arr)
// arr.shift()
// console.log(arr);
// arr.unshift(false)
// console.log(arr);

// let bollar = ["kimbek", "nimabek"]
// let qizlar = ["kimbonu", "nimabonu"]

// let umumiy = bollar.concat("nimajon")
// console.log(umumiy)



// /* Object */

// let arr = [oquvchi = {
//    ism: "kimdur",
//    familiya: "nimayev",
//    yoshi: 20
// },
// oquvchi2 = {
//    ism: "kimdur",
//    familiya: "nimayev",
//    yoshi: 20
// }]


// let oquvchi = new Object({})

// oquvchi = Object.create(oquvchi)

// oquvchi.yosh  = 20
// console.log(arr)


let Math2 = {
    sum: function(a, b) {return a + b },
    kopaytiruv: function(a, b) {return a * b }
}
console.log(Math2.sum(2, 3))
console.log(Math2.kopaytiruv(2, 3))