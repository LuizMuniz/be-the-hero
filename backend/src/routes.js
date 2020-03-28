const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

/* Rotas de login */
routes.post('/session', SessionController.create)

/* Rotas das ONGs */
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

/* Rotas dos casos */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

/* Rotas dos casos especificos da ong*/
routes.get('/profile', ProfileController.index) 

module.exports = routes;