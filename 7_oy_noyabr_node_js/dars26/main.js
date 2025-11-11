let Http = require('http')
let fs = require('fs')

let server = Http.createServer((request, responce) => {
	if (request.url == '/users' && request.method == 'GET') {
		let users = fs.readFileSync('./users.json', 'utf-8')
		responce.end(users)
	} else if (request.url == '/cars' && request.method == 'GET') {
		let cars = fs.readFileSync('./cars.json', 'utf-8')
		responce.end(cars)
	} else if (request.url == '/users' && request.method == 'POST') {
		request.on('data', (chunk) => {
			chunk = JSON.parse(chunk)
			let users = fs.readFileSync('./users.json', 'utf-8')
			users = users ? JSON.parse(users) : []
			let found = users.find((el) => el.name == chunk.name)
			if (found) return responce.end('Bu user mavjud')
			users.push(chunk)
			fs.writeFileSync('./users.json', JSON.stringify(users, null, 4))

			responce.end(
				JSON.stringify({
					xabar: 'User saqlandi',
					users,
				}),
			)
		})
	} else if (request.url == '/cars' && request.method == 'POST') {
		request.on('data', (body) => {
			body = JSON.parse(body)
			let cars = fs.readFileSync('./cars.json', 'utf-8')
			cars = cars ? JSON.parse(cars) : []
			let found_car = cars.find((el) => el.model == body.model)
			if (found_car) return responce.end('Bu moshina mavjud')

			cars.push(body)
			fs.writeFileSync('./cars.json', JSON.stringify(cars, null, 4))
			responce.end(
				JSON.stringify({
					xabar: 'Car saqlandi',
					cars,
				}),
			)
		})
	} else {
		responce.end('Serverga xush kelibsiz')
	}
})

server.listen(3000, () => console.log('Server 3000 portda ishlayapdi'))
