const express = require('express');
const path = require('path');
const User = require('./db/models/user');
require('./db/mongoose');
bodyParser = require("body-parser");
port = 3080;
const app = express();
app.use(express.json());


app.post('/register', async (req, res) => {
  

  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send({ message: 'success' })
  } catch (e) {
    res.status(400).send({ message: 'failed' })

  }

});


app.post('/users/login', async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.status(201).send({ message: 'success' })
  } catch (e) {
    res.status(400).send({ message: 'failed' })
  }

});




app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});