const fs = require('fs')
const path = require('path')

// const { users } = require('./data.js')
// console.log(users)
// fs.writeFileSync('./text.txt', 'salom')
// let data = fs.readFileSync('./text.txt', 'utf-8')
// console.log(data)
// setTimeout(() => {
// 	fs.unlinkSync('./text.txt')
// 	console.log('deleted')
// }, 5000)
// fs.writeFileSync('./data.json', JSON.stringify(users, null, 4))
// setTimeout(() => {
// 	fs.renameSync('./data.json', './students.txt')
// }, 5000)

class Auth {
    #pathname = path.join(__dirname, "users.json")
	#readData(path) {
		try {
			let data = fs.readFileSync(path, 'utf-8')
			data = data ? JSON.parse(data) : []
			return data
		} catch (err) {
			return err.message
		}
	}
	#writeData(path, data) {
		fs.writeFileSync(path, JSON.stringify(data, null, 4))
	}
    #findUser(data, name) {
        let user_found = data.find(el => el.name == name)
        return user_found
    }
	register(user) {

        
		let data = this.#readData(this.#pathname)
        let user_found = this.#findUser(data, user.name)
		if(!user_found){
            data.push(user)
            this.#writeData(this.#pathname, data)
            console.log('Register success')
        }else {
            console.log("already registered")
        }

	}

    login(name, password) {
        let data = this.#readData(this.#pathname)
        let user_found = this.#findUser(data, name)

        if(user_found){
            if (user_found.password !== password){
                console.log("Wrong password")
                return
            }
            console.log("Successfully logged in")
            return
        }

        console.log("User not found")
    }
}

let auth = new Auth()

auth.register({ name: 'ali', password: '1234', age: 100 })

// auth.login("Ali", '12345')


// console.log(path.basename('./main.js'))
// console.log(path.join('./data/data/data'))

// console.log(path.join(__dirname, "data", "data.json"))

// console.log(__filename)

// console.log(path.extname('drve.mp3'))
// console.log(path.extname('index.html'))
// console.log(path.resolve('./data/data.json'))
// console.log(path.resolve('/data', '/data.json'))
function writeToText(arr) {
    let natija = 0
    for(let i of arr) {
        console.log(i)
        natija += i
    }
    console.log(natija);
    

    fs.appendFileSync('./result.txt', JSON.stringify([arr, natija]))
    console.log("Txt filega yozildi")
}
writeToText([2,5,456,54]) // [2,5,456,54] , 517
