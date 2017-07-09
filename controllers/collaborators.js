'use strict'

const CollaboratorsDemoData = require('../public/collaborators.json')

function getCollaborators(req, res){
	res.send(JSON.stringify(CollaboratorsDemoData))
}

module.exports = {
	getCollaborators,
	// getCollaborator,
	// getProjects,
	// getProject
}
