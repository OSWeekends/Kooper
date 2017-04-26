'use strict'

const fs = require('fs')

function getCollaborators(req, res){
	fs.readFile('./collaborators.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send(err)
		}
		res.status(200).send(data)
	})
}

function getCollaborator(req, res){
	fs.readFile('collaborator_id.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send(err)
		}
		res.status(200).send(data)
	})
}

function getProjects(req, res){
	fs.readFile('./projects.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send(err)
		}
		res.status(200).send(data)
	})
}

function getProject(req, res){
	fs.readFile('./project_id.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send(err)
		}
		res.status(200).send(data)
	})
}


module.exports = {
	getCollaborators,
	getCollaborator,
	getProjects,
	getProject
}