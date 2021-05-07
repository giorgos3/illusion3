const express = require('express');
const path = require('path');
const User = require('./db/models/user');
const Order = require('./db/models/order');
require('./db/mongoose');
const jwt = require('jsonwebtoken')
const auth = require('./middleware/auth')
bodyParser = require("body-parser");
port = 3080;



const app = express();
app.use(express.json());


app.post('/register', async (req, res) => {


  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ message: 'success', token })
  } catch (e) {
    res.status(400).send({ message: 'failed' })

  }

});


app.post('/users/login', auth, async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)



    res.status(201).send({ message: 'success' })
  } catch (e) {
    res.status(400).send({ message: 'failed' })
  }

});


app.post('/order', auth, async (req, res) => {
  // console.log(req.body)
  const order = new Order({
    ...req.body,
    userID: req.user._id
  })

  try {
    await order.save()
    res.status(201).send({ message: 'Success' })
  } catch (e) {
    res.status(400).send({ message: 'Failed' })
  }

})


app.get('/users/orders-history', auth, async (req, res) => {
  console.log(req.body)
  try {
    const orders = await User.findByIdOrder(req.body.email)
    res.status(201).send({orders})
  } catch (e) {
    res.status(400).send()
  }
})



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});