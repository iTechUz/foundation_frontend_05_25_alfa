class Odam {
	constructor(ism, yosh, kasb) {
		this.ism = ism
		this.yosh = yosh
		this.kasb = kasb
	}

    salomBer(){
        console.log(`Salom, mening ismim ${this.ism}, yoshim ${this.yosh} va kasbim ${this.kasb}.`)
    }
}

let odam = new Odam("Ahmad", 28, "Dasturchi")
console.log(odam)
odam.salomBer()


class Student{
	#password
	constructor(name, phone, password) {
		this.name = name
		this.phone = phone
		this.#password = password
	}
	get getPassword(){
		return this.#password
	}
	set setPassword(new_password) {
		this.#password = new_password
	}
}

let student = new Student("Ism", "+99899999999", "my_password")
console.log(student)
student.name = "Yangi ism"

console.log(student);
console.log(student.getPassword)

student.setPassword = "newPassword"
console.log(student.getPassword)



class Company{
	#numberOfEmployee = 0
	constructor(nom, odamSon) {
		this.nom = nom
		this.#numberOfEmployee = odamSon
	}

	get getEmpNum() {
		return this.#numberOfEmployee
	}
	set addEmp(number) {
		this.#numberOfEmployee += number
		console.log("add new employee")
	}
	set removeEmp(number) {
		this.#numberOfEmployee -= number
		console.log("Epmloyee removed")
	}

}

let company = new Company("SpaceX", 10000)

console.log(company)
console.log(company.getEmpNum)

company.addEmp = 100
console.log(company.getEmpNum)

company.removeEmp = 10
console.log(company.getEmpNum)

company.numberOfEmployee = 100

console.log(company)
console.log(company.getEmpNum)


class BankAccount {
	#balance = 0

	deposit(pul) {
		this.#balance += pul
	}

	getBalance() {
		console.log(this.#balance)
	}
}

let bancAccount = new BankAccount()

bancAccount.getBalance()
bancAccount.deposit(1000000)
bancAccount.getBalance()


class CoffeMachine {

	getCoffe() {
		this.#boilWater()
		this.#addCoffee()
		this.#addSugar()
		console.log("Koffe tayyor")
	}

	#boilWater(){
		console.log("Suv qaynayapdi")
	}

	#addCoffee() {
		console.log("Kofe Qo'shildi")
	}

	#addSugar(){
		console.log("Shakar qo'shildi")
	}
}

let coffe = new CoffeMachine()

coffe.getCoffe()




class FoodMachine {
	#addMeat() {
		console.log("Go'sht qovurilayapdi")
	}

	#addSalt() {
		console.log("Tuz qo'shildi")
	}

	#addMacarony() {
		console.log("Makaron qo'shildi")
	}

	#addWater() {
		console.log("Suv qo'shildi")
	}

	tayyorla() {
		this.#addMeat()
		this.#addSalt()
		this.#addMacarony()
		this.#addWater()

		console.log(".......Ovqat jarayonda")

		console.log("Ovqat pishdi")
	}
}


let ovqatAparat = new FoodMachine()

ovqatAparat.tayyorla()



class Ota {
	constructor(xarakter, ves, soch) {
		this.xarakter = xarakter
		this.ves = ves
		this.soch = soch
	}

	getInfo () {
		console.log("Otaning sochini rangi", this.soch)
	}
}


class Bola extends Ota {
	getInfo () {
		super.soch = "Qizil"
		console.log("Bolaning sochi", this.soch)
	}
}

let ota = new Ota("Xushchaqchaq", 100, "Qora")
let bola = new Bola()
console.log(ota)
console.log(bola)
bola.soch = "Qizil"

ota.getInfo()
bola.getInfo()


class PayMe{
	#balance = 0

	getBalance() {
		console.log(this.#balance)
	}

	addBalance(balance) {
		this.#jarayon()
		this.#balance += balance
		console.log("Pul balancega qo'shildi")
	}
	#jarayon(){
		console.log("Pul tushish jarayonida")
	}
}

let payme = new PayMe()

payme.getBalance()
payme.addBalance(100)
payme.getBalance()

class NotPayme extends PayMe{
	getBalance() {
		console.log("Senga balansingni ko'rsatmayman")
	}
}

let notpayme = new NotPayme()

notpayme.getBalance()
notpayme.addBalance(100)
notpayme.getBalance()