const { Router } = require('express');
const routes = Router();
const LocaisReciclagemController = require('./app/controllers/LocaisReciclagemController')

routes.get('/locaisReciclagem', LocaisReciclagemController.index);
routes.get('/locaisReciclagem/:id', LocaisReciclagemController.show);
routes.post('/locaisReciclagem', LocaisReciclagemController.create);
routes.delete('/locaisReciclagem/:id', LocaisReciclagemController.delete);
routes.put('/locaisReciclagem/:id', LocaisReciclagemController.update);

module.exports = routes;