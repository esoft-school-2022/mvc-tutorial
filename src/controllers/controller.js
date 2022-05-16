const Weather = require('../models/Weather');
const UserGames = require('../models/UserGames');
const API_KEY = '5dbd802f81552019b8f0192145e6e5b4';

renderHomePage = (req, res) => {
    res.render('index');
}

renderAboutPage = (req, res) => {
    res.render('about');
}

renderGamesPage = (req, res) => {
    res.render('games');
}

renderAddGamePage = (req, res) => {
    res.render('new');
}

renderWeatherPage = async (req, res) => {
    const weather = new Weather(req.body.name);
    const result = await weather.getWeather(req, res, API_KEY);

    res.render('index', {
        weather: result
    });
}

renderUserGamesPage = async (req, res) => {
    const userGames = new UserGames();
    const result = await userGames.getUserGames();

    res.render('games', {
        data: result.rows
    });
}

module.exports = {
    renderHomePage,
    renderAboutPage,
    renderAddGamePage,
    renderGamesPage,
    renderWeatherPage,
    renderUserGamesPage
}