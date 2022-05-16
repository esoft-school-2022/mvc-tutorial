const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');


router.get('/', controller.renderHomePage);
router.get('/about', controller.renderAboutPage);
router.get('/games', controller.renderGamesPage);
router.post('/games', controller.renderUserGamesPage);
router.post('/', controller.renderWeatherPage);
router.get('/new', controller.renderAddGamePage);

module.exports = router;