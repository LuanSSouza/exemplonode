const routes = require('express').Router();

const asyncHandler = require('./middlewares/asyncHandler');

const exemploController = require('./controllers/exemploController');

routes.route('/exemplo')
    .get(asyncHandler(exemploController.get))
    .post(asyncHandler(exemploController.post));

module.exports = app => app.use('/', routes);