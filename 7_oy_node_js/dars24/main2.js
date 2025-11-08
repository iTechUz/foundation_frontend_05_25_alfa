// let plus = require("./main.js")

// let natija = plus(4,5)
// console.log("hello2")
let fs = require('fs')

class Maktab {
	readStudents(faylNomi) {
		let data = fs.readFileSync(faylNomi, 'utf-8')
		data = data ? JSON.parse(data) : []
		return data
	}
    writeStudents(faylNomi, data) {
        fs.writeFileSync(faylNomi, JSON.stringify(data, null, 4))
        console.log("Saqlash ishlari tugadi")
    }

	addStudent(ism, yosh, gender) {
		let students = this.readStudents('./data.json')
        let isExist = students.filter(el => el.ism == ism)
        if(isExist.length) {
            console.log(ism + " ismli student mavjud")
            return
        }
		let newStudent = {
			ism,
			yosh,
			gender,
		}

        students.push(newStudent)
        this.writeStudents("./data.json",students)
        console.log("Yangi student qo'shildi. Ism: ", ism)

	}

	findStudent(name) {
		let data = this.readStudents("./data.json")
		if(!data.length) return "Ma'lumotlar mavjud emas"
		let student = data.find(el => el.ism == name)
		if(!student) return "Student topilmadi"
		return student
	}
}
module.exports = Maktab
