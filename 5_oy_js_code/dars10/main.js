// for(let i=1; i <=10; i++) {
//     console.log(i)
// }

// let i = 1
// while(i <= 10) { // 1, 2
//     console.log(i)
//     i++ // 2,
// }

// let i = 1

// while (i <= 100) {

//     if(i % 2 == 0) {
//         console.log(i)
//     }
// 	i++
// }

// console.log('while tugadi')

// function factorial(son) {
//     let i = 1
//     let result = 1
//     while (i <= son) {
//         result = result * i
//         console.log(result)
//         i++
//     }
// }
// factorial(10)


// function checkPassword () {
//     let password = "secret"
//     let urunishlar = 0
//     while(urunishlar < 3) {
//         let parol = prompt("Parolni kiriting: ")

//         if(parol == password) {
//             alert("Muvaffaqiyatli kirdingiz!")
//             break
//         }else {
//             alert("Xato parol")
//             urunishlar++
//         }
    
//     }
//     if(urunishlar == 3) return alert("Bloklandi")
//     return
// }

// checkPassword()


// function tahminQil() {
//     let random = 37

//     let urunishlar = 0
//     let topildi = true

//     while(topildi) {
//         let son = +prompt("Men tahmin qilgan sonni toping(50gacha): ")
//         if (son > random) {
//             alert("Katta")
//             urunishlar += 1
//         }else if (son < random) {
//             alert("Kichkina")
//             urunishlar += 1
//         }else {
//             topildi = false
//         }
    
//     }
//     let xabar = `Siz ${urunishlar} martada topdingiz`
//     return alert(xabar)
// }

// tahminQil()

// function teskariSon(son) {
//     let natija = 0

//     while(son > 0) {
//         natija = natija * 10 // 0, 30, 320, 
//         natija += son % 10 // 3, 32, 321 
//         son = Math.floor(son / 10) // 12, 1, 0
//     }
//     console.log(natija)
// }
// teskariSon(34576)


function sum(son) {
    let yigindi = 0
    while(son > 0) {
        yigindi += son % 10 // 3
        son = Math.floor(son / 10) // 12
    }
    console.log(yigindi)
}
sum(123) // --> 6