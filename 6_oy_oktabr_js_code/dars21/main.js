let promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		res('Hello')
	}, 2000)
})

promise1.then((message) => console.log(message))

console.log("Bilol")

let promise2 = new Promise((res, rej) => {
	setTimeout(() => {
		res('salom')
	}, 1000)
})
promise2.then(msg => console.log(msg))

console.log("Promise 2")

let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('3-promise')
	}, 3000)
})
promise3.then(msg => console.log(msg))

console.log("Bu yerda 3- promise");

let randomSon = new Promise((res, rej) => {
    setTimeout(() => {
        res(Math.floor(Math.random() * 10))
    }, 2000)
})

randomSon.then(msg => console.log("Random sonimiz", msg))

setTimeout(() => {
    console.log("Hello bilol")
},3000)

console.log("Bye Bilol")

function juft(son) {
    return new Promise((res, rej) => {
        if(son % 2 == 0) {
            res("Juft son")
        }else {
            rej("Juft son emas")
        }
    })
}

juft(3).then(msg => console.log(msg)).catch(err => console.log(err))

function fizzBuzz(son) {
    return new Promise((res, rej) => {
        if(son % 3 == 0 && son % 5 == 0) res("FizzBuzz")
        else if (son % 3 == 0) res("Fizz")
        else if (son % 5 == 0) res("Buzz")
        else rej("Hech biri emas")
    })
}
fizzBuzz(2).then((message) => console.log(message)).catch((err) => console.log(err));

promise1.then(promise2).then(promise3)

promise1.then(ms => {
    console.log(ms)
    return promise2
}).then(msg => {
    console.log(msg)
    return promise3
}).then(msg => console.log(msg)) // ====>>> chain uslubi

function qadam1 (){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1 - qadam")
        }, 2000)
    })
}
function qadam2 (){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2 - qadam")
        }, 2000)
    })
}
function qadam3 (){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3 - qadam")
        }, 1000)
    })
}

qadam1().then(message => {
    console.log(message)
    return qadam2()
}).then(message => {
    console.log(message)
    return qadam3()
}).then(message => {
    console.log(message)
})

qadam1().then(console.log)
qadam2().then(console.log)
qadam3().then(console.log)

function wait(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(ms / 1000 + " Sekund ishladi")
        }, ms)
    })
}

wait(5000).then(console.log)

function a() {
	let random = Math.floor(Math.random() * 5000)

	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`Hello a ${Math.floor(random / 1000)}`, )
		}, random)
	})
}
function b() {
	let random = Math.floor(Math.random() * 5000)

	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`Hello b ${Math.floor(random / 1000)}`)
		}, random)
	})
}
function c() {
	let random = Math.floor(Math.random() * 5000)

	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`Hello c ${Math.floor(random / 1000)}`)
		}, random)
	})
}

a()
	.then((msg) => {
		console.log(msg)
		return b()
	})
	.then((msg) => {
		console.log(msg)
		return c()
	})
	.then((msg) => {
		console.log(msg)
	})


Promise.all([a(), b(), c()]). then(msgs => {
    console.log("Hammasi bajarildi");
    console.log(msgs)
    
}).catch(console.log)

Promise.race([a(), b(), c()]).then(results => {
    console.log("Raceda ishladi");
    console.log(results);
    
}).catch(console.log)