'use strict'

const express = require('express')
const CollaboratorCtrl = require('../controllers/collaborators')
const api = express.Router()

api.get('/v1/collaborators', CollaboratorCtrl.getCollaborators)
api.get('/v1/collaborators/:id', CollaboratorCtrl.getCollaborator)


module.exports = api