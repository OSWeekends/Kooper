'use strict'

//here you can find anything related to configuration

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes/api')

const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`server is on port ${port}`);
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api' , api)



module.exports = app
