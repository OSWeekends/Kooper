'use strict'

const CollaboratorsDemoData = require('../public/collaborators.json')
const Collaborator_idDemoData = require('../public/collaborator_id.json')

function getCollaborators(req, res){
	res.send(JSON.stringify(CollaboratorsDemoData))
}

function getCollaborator(req, res){
	res.send(JSON.stringify(Collaborator_idDemoData))
}

module.exports = {
	getCollaborators,
	getCollaborator
}
