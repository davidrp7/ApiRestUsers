const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

var users = ['oscar', 'juan', 'marcos'];
var books = [{id_autor: 1, titulo: 'El senor de los anillos', autor: 'JRR'}, {titulo: 'Harry Poter', autor: 'JK Rowlin'}]; 
var autors = [{id: 1, name: 'oscar'}, {id: 2, name: 'juan'},{id: 3, name: 'marcos'}];


// http://127.0.0.1:3000/ 
app.get('/', (req, res) => {
	res.status(200).send("Welcome to API REST")
})

// http://127.0.0.1:3000/users 
app.get('/users', (req, res) => {
	res.send(users)
})

// http://127.0.0.1:3000/books
app.get('/books', (req, res) => {
	res.send(books)
})

// http://127.0.0.1:3000/users
app.post('/users', (req, res)=>{
	let data = req.query;
	users.push(data.user_name)
	res.send("New user add")
})

// http://127.0.0.1:3000/users/1
app.patch('/users/:id', (req, res) => {
	let params = req.params;
	let data = req.query;
	users[params.id] = data.user_name
	res.send("User Update")
})

// http://127.0.0.1:3000/users/1
app.delete('/users/:id', (req, res)=>{
	let params = req.params;
	users.splice(params.id, 1);
	res.send("User Delete")
})

http.createServer(app).listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
