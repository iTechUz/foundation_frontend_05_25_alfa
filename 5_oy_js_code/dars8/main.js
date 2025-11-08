// function FizzBuzz(son){
//     if(son % 5 == 0 && son % 3 == 0) {
//         console.log("FizzBuzz");
//     }else if (son % 5 == 0) {
//         console.log("Fizz")
//     }else if (son % 3 == 0) {
//         console.log("Buzz");
//     }else {
//         console.log("Nothing");
//     }
//     return 'a'
// }
// FizzBuzz(2)
// FizzBuzz(10)

// FizzBuzz(15)
// FizzBuzz(3)

function checkScore(ball) {
    if(ball > 100) {
        console.log("Baxo xato")
    }else if(ball < 0){
        console.log("Baxo xato"); 
    }else if (ball <= 100 && ball >= 90) {
        console.log(5)
    } else if(ball < 90 && ball >= 80) {
        console.log(4);
    }else if(ball < 80  && ball >= 70) {
        console.log(3)
    }else {
        console.log("Siz yiqildingiz!");
    }
}

checkScore(69)


// bo'y - og'irlik > 90 va <110 --> normal
// bo'y - og'irlik < 90  Og'irsiz
// bo'y - og'irlik > 110 siz yengilsiz

// function weightControl(uzunlik, ogirlik) {
//     let orta = uzunlik - ogirlik

//     if(orta < 110 && orta > 90) {
//         console.log("normal")
//     }else if (orta < 90) {
//         console.log("Og'ir");
//     }else {
//         console.log("Yengil"); 
//     }
// }

// weightControl(170, 75) // --> norma
// weightControl(170, 81) // --> og'ir
// weightControl(170, 59) // --> yengil
function speedControl(tezlik) {
    if(tezlik >= 60 && tezlik < 80) {
        console.log("Norma");
    }else if (tezlik >= 80 && tezlik <= 90) {
        console.log('tez');
    }else if( tezlik > 90) {
        console.log("Juda tez");
    }else if (tezlik < 60 && tezlik > 40) {
        console.log('Sekinroq'); 
    }else {
        console.log("Toshbaqa");
        
    }
}


speedControl(70) // --> norma
speedControl(90) // --> tez
speedControl(95) // --> juda tez
speedControl(55) // --> sekinroq
speedControl(40) // --> toshbaqa

