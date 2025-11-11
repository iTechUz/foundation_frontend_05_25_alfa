try{
    print("hi")
}catch(error){
    console.log(error.message)
}

try {
    function sum(a, b, c) {
        console.log(a, b)
        return a + b + c
    }
    console.log(sum(2, 3, 4))
}catch(err) {
    console.log(err.message)
}

function sum(a, b) {
	console.log(a, b)
	return a + b
}
console.log(sum(2, 3, 4))

// Finally --> Try, Catch ishlasa ishlamasa finally ishlaydi.

function name() {
    console.log("Javohir")
    console.log("Alisher")
    return "Sanjarbek" // functionni break qiladi. To'xtaydu
    console.log("Shodiyor")
    console.log("Otkirbek")
}
console.log(name())

try {
    console.log("try ishladi")
    return
    print("Print")
}catch(err) {
    console.log("catch ishlad")
}finally {
    console.log("Finally ishladi")
}

// throw ---> bizga error yaratish uchun kerak bo'ladi. Errorni otadi

let son = 20
if(son > 20) {
    console.log("OK")
}else {
    throw new Error("Son yigirmaga teng yoki  kichkina")
}

let users = ["Javohir", "Shodiyor", "Sanjarbek", "Alisher", "O'tkirbek"]

if(users.includes("Suhrobbek")) {
    console.log("O'tkirbek darsda")
}else {
    throw new Error("Suhrobbek kelmadi")
}

try {
	let talabalar = ['Javohir', 'Shodiyor', 'Sanjarbek', 'Alisher']

	if (talabalar.includes("O'tkirbek")) {
		console.log("O'tkirbek darsda")
	} else {
		throw new Error("O'tkirbek kelmadi")
	}
} catch (err) {
	console.log(err.message)
}finally {
    console.log("Dars allaqachon boshlangan")
}

console.log("O'tkirbek ham kelmagan aslida")

function ismChiqar(ism) {
    try {
        if(!ism) {
            throw new Error("Ism kiritish majburiy")
        }

        console.log(ism)
    }catch(error) {
        console.log(error.message)
    }
}

ismChiqar("Sanjarbek")
ismChiqar()

// 0 / n = 0   n / 0 = "Xato"

function boluv(a, b){
    try{
        if(b == 0) throw new Error("B nolga teng bolishi mumkin emas")
        console.log(a / b)
    }catch(err) {
        console.log(err.message)
    }finally {
        console.log("Mission complete!")
    }
}

boluv(0, 24)
boluv( 24, 0) // ---> B nol bolishi mumkin emas

class MyCustomError extends Error {}

function muliply(a, b) {
	try {
		if (!a && !b) throw new MyCustomError("A  va B bo'lishi shart")
		else if (!b) throw new MyCustomError("B bo'lishi shart")
		console.log(a * b)
	} catch (err) {
		console.log(err.message)
	}
}

muliply(2, 3)
muliply(2)
muliply()
muliply(2, 9)

// withdraw

class Accaunt {
	#balance = 1000
	#password = 2000
	#isChecked = false
	withdraw(amount) {
		try {
			if (this.#isChecked == false) this.checkPasswd()
			if (!amount) throw new MyCustomError("Notog'ri qiymat")
			if (amount > this.#balance)
				throw new MyCustomError("Mablag'ingiz yetarli emas")
			this.#balance -= amount
			console.log('Pul yechildi')
		} catch (err) {
			console.log(err.message)
		} finally {
			console.log('Sizning mablagingiz ', this.#balance)
		}
	}

	checkPasswd(passwd) {
		if (!passwd) throw new MyCustomError('Parol kiritish shart')
		if (passwd !== this.#password) throw new MyCustomError('Xato parol')

		if (passwd == this.#password) this.#isChecked = true
		console.log("Parol to'g'ri")
	}
	takeCard() {
		this.#isChecked = false
	}
}
let accaunt = new Accaunt()
accaunt.checkPasswd(2000)
accaunt.withdraw(100)
accaunt.takeCard
accaunt.withdraw(100)

class Robot {
	#battery = 100
	#soatiga = 10

	start(hours) {
		try {
			if (hours * this.#soatiga > this.#battery)
				throw new MyCustomError('Battery not enough')
			this.#battery -= hours * this.#soatiga

            console.log("working....")
		} catch (err) {
			console.log(err.message)
		}
	}

	checkBattery() {
		console.log('Robotni batareykasi ', this.#battery)
	}

	charge(hours) {
		try {
			if (hours * this.#soatiga + this.#battery > 100)
				throw new MyCustomError("Bu juda ko'p")
			this.#battery += hours * this.#soatiga
            console.log("Charging.....")
		} catch (err) {
			console.log(err.message)
		}
	}
}

let robotcha  = new Robot()
robotcha.start(10)
robotcha.checkBattery()

robotcha.charge(2)
robotcha.checkBattery()