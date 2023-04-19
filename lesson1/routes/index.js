const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.shaneFunction);

module.exports = routes;