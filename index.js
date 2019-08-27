const express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken');
const app = express()
const port = 3000

var connection = mysql.createConnection({
	host:'localhost',
	user:'admin',
	password:'admin',
	database:'world'
})
connection.connect()
var LastName;

const dbhelper = {
	test:()=>{
		var name = "yunulfikri"
		return name
	}
}

app.get('/', (req, res) =>{
	connection.query('SELECT * FROM Persons ORDER BY RAND() LIMIT 1', function(err, rows, fields){
		LastName = rows[0].FirstName;
	})

	//res.send(LastName)
	res.send(dbhelper.test() + new Date)

})

app.get('/token', (req, res) => {
	var token = jwt.sign('yunulfikri','h4fn58dj4lp33')
	res.send(token)
})

app.listen(port, () => console.log('express-js server running'))