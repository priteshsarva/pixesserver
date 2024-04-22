const express = require('express')
// const bodyParser = require('body-parser');git branch -M main

const app = express()
const port = process.env.PORT || 8000


app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/sendmail',require('./routes/mail'))

app.listen(port,()=>{
  console.log(port);
})