'use strict'

//here you can find anything related to configuration

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// const api = require('./routes/api')

//launch server
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`server is on port ${port}`);
});

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//CORS cross origin enabler
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//use router
// app.use('/api' , api)
//access to demo data in json file
// app.use(express.static('public'));

app.get('/', (req, res) =>{
	res.send('Hola mundo')
})

app.get('/blurb',(res, req) =>{
	res.sendFile('./index.html')
})

// module.exports = app
