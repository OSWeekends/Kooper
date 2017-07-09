'use strict'

//here you can find anything related to configuration

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// const Collaborator_idDemoData = require('./public/collaborator_id.json')
// const ProjectsDemoData = require('./public/projects.json')
// const Project_idDemoData = require('./public/project_id.json')
// const api = require('./routes/api')
const collaboratorsCTRL = require('./controllers/collaborators')
//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//CORS cross origin enabler
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.get('/api/v1/collaborators', collaboratorsCTRL.getCollaborators)

// app.get('/api/v1/collaborator/:id', (req, res) =>{
// 	res.send(JSON.stringify(Collaborator_idDemoData))
// })

// app.get('/api/v1/projects', (req, res) =>{
// 	res.send(JSON.stringify(ProjectsDemoData))
// })

// app.get('/api/v1/project/:id', (req, res) =>{
// 	res.send(JSON.stringify(Project_idDemoData))
// })

//launch server
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`server is on port ${port}`);
});

module.exports = app
