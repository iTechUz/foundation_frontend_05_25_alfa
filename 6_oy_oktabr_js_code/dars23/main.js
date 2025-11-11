let son = new Promise((res, rej) => {
    setTimeout(() => {
        res(15)
    }, 1000)
})

son.then(msg => msg + 10).then(msg2 => console.log(msg2))

let promise2 = new Promise((res, rej) => {
    let randomSon = Math.random()
    if(randomSon > 0.5) res("Success")
    else rej("error")
})
promise2.then(natija => console.log(natija)).catch(xato => console.log(xato))

let promise3 = new Promise((res, rej) => {
    Math.random() > 0.5 ? res("Success") : rej("Error")
})

promise3.then(msg => console.log(msg)).catch(console.log)

let yosh = Math.floor(Math.random() * 30)

yosh > 18 ? console.log("Voyaga yetgan", yosh) : console.log("Voyaga yetmagan", yosh)

function kvadratSon(son) {
    return new Promise((res, rej) =>  {
        res(son ** 2)
    })
}

async function callSquare() {
    let natija = await kvadratSon(10)
    console.log(natija)
}
callSquare()

function fizzBuzz(son) {
	return new Promise((res, rej) => {
		if (son % 3 == 0 && son % 5 == 0) res('FizzBuzz')
		else if (son % 3 == 0) res('Fizz')
		else if (son % 5 == 0) res('Buzz')
		else rej('Error')
	})
}

async function runFizzBuzz() {
	try {
		let natija = await fizzBuzz(11)
		console.log(natija)
	} catch (err) {
		console.log(err)
	}
}
runFizzBuzz()


function bir(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Bir")
        }, 1000)
    })
}
function ikki(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Ikki")
        }, 1000)
    })
}
function uch(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Uch")
        }, 1000)
    })
}


async function ishlat() {
    console.log(await bir())
    console.log(await ikki())
    console.log(await uch())
}

ishlat()


async function getUser() {
    return {id: 1, name: "Ism"}
}


async function postUser(user) {
    console.log(`${user.id}- id dagi ${user.name}`)
}

async function run() {
    let user = await getUser()
    await postUser(user)
}

run()
async function download() {
    for(let i = 0; i <= 100; i += Math.floor(Math.random() * 10)) {
        console.log("Downloading.... " + i + "%")
        await new Promise((r) => setTimeout(r, 1000))
        console.clear()
    }
    console.log("Complete!")
}
download()

/*
Downloading ... 10%
Downloading ... 20%
Downloading ... 30%

Downloading ... 100% 
Complete.

*/


async function login(username, password) {
    if(username == "admin" && password == "1234") return "Xush kelding"
    throw new Error("Wrong username or password")
}

async function  run() {
    try{
        let result = await login("admi", '1234')
        console.log(result);
        
    }catch(err) {
        console.log(err.message);
    }
}
run()