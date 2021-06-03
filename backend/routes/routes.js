const express = require('express')
const routes = express.Router();

const databaseController = require('../controller/databaseController')
const functionsController = require("../controller/functionsController");

routes.get('/data/properties', databaseController.getAllDataConfigs)
routes.get('/data/:data', databaseController.getData)
routes.get('/functions/filter/all', functionsController.getAllFilter)
routes.get('/functions/filter/run/:data/:filter', functionsController.getFilter)
routes.get('/data/all', databaseController.getAll);

module.exports = routes
