'use strict'

//here you can find anything related to configuration
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const api = require('./routes/api')
const collaboratorsCTRL = require('./controllers/collaborators')
const projectsCTRL = require('./controllers/projects')

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//CORS cross origin enabler
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Access to public file
app.use(express.static('public'));

// ENDPOINTS
app.get('/', (req, res) =>{
	res.sendFile('./public/index.html')
})
app.get('/api/v1/collaborators', collaboratorsCTRL.getCollaborators)
app.get('/api/v1/collaborator/:id', collaboratorsCTRL.getCollaborator)
app.get('/api/v1/projects', projectsCTRL.getProjects)
app.get('/api/v1/project/:id', projectsCTRL.getProject)

//launch server
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`server is on port ${port}`);
});

module.exports = app
