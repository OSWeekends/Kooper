'use strict'

const ProjectsDemoData = require('../public/projects.json')

function getProjects(req, res){
	res.send(JSON.stringify(ProjectsDemoData))
}

function getProject(req, res){
	const Project_idDemoData = require('../public/project_id.json')
}

module.exports = {
	getProjects,
	getProject
}