const express = require('express');
const path = require('path');
const { Client } = require('pg')  
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];



const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'my-app',
  password: '1234',
  port: 5432,
});

client.connect();


app.post('/login',function(req,res){
	const user = req.body;
//   const pwd = req.body.password;
	
	
  return res.json({ user: 'hello' });
});




app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

// app.get('/api/users', (req, res) => {
//   console.log('api/users called!')
//   res.json(users);
// });

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});