// for(let nimadur = 0;  nimadur <= 10; nimadur++) {
//     console.log(nimadur += 1)
// }

// for(let i = 10; i >= 0; i --) {
//     console.log(i);
// }


// let students = ["Alisher", "Sanjarbek", "Musobek"]

// for(let student = 0; student <= students.length - 1; student ++) {
//     console.log(students[student])
// }

// let ages = [10, 14, 32, 48, 21, 5]

// for(let age = 0; age <= ages.length - 1; age ++) {
//     if(ages[age] >= 18) {
//         console.log(ages[age])
//     }else {
//         console.log("Ta'qiqlangan");
//     }
// }


// let name = "Kimdurbek"
// // console.log(name[name.length])


// for(let i = 0; i < name.length; i++) {
//     console.log(name[i])
// }


// let n = 5
// let natija = 0

// for (let sum = 1; sum <= n; sum ++) {
//     natija += sum
// }

// console.log(natija)


// let nums = [4, 10, 15, 20]
// let natija = 0
// for(let i = 0; i < nums.length; i ++ ) {
//     natija += nums[i]
// }

// console.log(natija);


// let a = 50
// for(let j = 0; j <= 50; j ++) {
//     if(j % 2 === 0) {
//         console.log(j); 
//     }
// }


// let b = 3 // 1*2*3 --> 6

// let result = 1
// for(let c = 1; c <= b; c++) {
//     result = result * c
// }
// console.log((result));


// let n = 99

// let juft = 0
// let toq = 0

// for(let k = 1; k <= n; k ++) {
//     if(k % 2 == 0) {
//         juft ++
//     }else {
//         toq ++
//     }
// }
// console.log("Juft: ", juft)
// console.log("Toq: ", toq)


/*

*
**
***
****
*****
******
*******
*/


// let overall = 5

// let res = ""
// for(let i = 1; i <= overall; i ++) {
//     res = ""
//     for(let j = 1; j <= i; j++) {
//         res += "*"
//     }
//     console.log(res)
// }


/*
*****
****
***
**
*
*/


// let overall = 5
// let res = ""
// for(let i = overall; i >= 0; i --) {
//     res = ""

//     for(let j=1; j <= i; j ++) {
//         res += "*"
//     }
//     console.log(res)
// }

let word = "Salom" // --> maloS; Sanjarbek --> kebrajnaS
let teskari = ""


for(let i = word.length - 1; i >= 0; i --) {
    teskari += word[i]
    console.log(teskari)
}
