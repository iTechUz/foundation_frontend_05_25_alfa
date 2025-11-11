let olma = 'qizil'
// let obj = {
//     ism: "Sanjarbek",
//     familya: "Ermatov",
//     yosh: 13,
//     kasbi: "O'quvchi",
//     'likes fish': true,
//     sum: function() {
//         console.log(this.kasbi)

//     }

// }

// console.log(obj['likes fish'])
// delete obj['kasbi']
// // console.log(obj)

// console.log(obj.olma);

// obj.sum()

let mevalar = {
	olma: 10000,
	gilos: 50000,
	olcha: 30000,
	banan: 20000,
	shaftoli: 5000,
	mango: 100000,
}
// let sum = 0
// for(let key in mevalar) {
//     sum += mevalar[key]
// }
// console.log(sum)


// let students = {
//     Alisher: 14,
//     Sanjarbek: 13,
//     Musobek: 14,
//     Shodiyor: 14,
//     Otkirbek: 14,
//     Javohir: 14,
//     Suhrobbek: 16
// }
// function findEldest(students) {
//     let engKatta = 0
//     let ism = ""

//     for (let student in students) {
//         if(students[student] > engKatta) {
//             engKatta = students[student]
//             ism = student
//         }
//     }
//     console.log(ism , engKatta)
// }

// findEldest(students)


// function teskari(sonlar) {

//     for(let son in sonlar) {
//         let natija = 0
//         let current = sonlar[son]
//         while(current > 0) {
//             natija = natija * 10 
//             natija += current % 10
//             console.log(natija)
//             current = Math.floor(current / 10)
//         }
//         sonlar[son] = natija
//     }
//     console.log(sonlar)
// }

// teskari(sonlar)

// console.log(Object.values(sonlar))

// let natija = {}
// let sonlar = {
//     son1: 23, // --> 32
//     son2: 33, // --> 33
//     son3: 879, // --> 978
//     son4: 123, // --> 321
// }
// console.log(sonlar);

// for(let son in sonlar) {
//     console.log(natija)
//     natija[sonlar[son] + ""] = son
// }
// console.log(natija)


const arr = [1, 2, 3, 2, 4, 1, 2, 5, 1];
function countDuplicate(arr) {
    let umumiy = {}

    for(let i of arr) {
        if(!umumiy[i]) {
            umumiy[i] = 1
        }else {
            umumiy[i] += 1
        }
    }
    
    for(let j in umumiy) {
        if(umumiy[j] <= 1) {
            delete umumiy[j]
        }
    }

    console.log(umumiy)
}
// {1: 3, 2: 3}
countDuplicate(arr)



