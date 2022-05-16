const axios = require('axios');

class Weather {
    constructor(city) {
        this.name = city
    }

    changeName = function(name) {
        return `Beautiful City ${name}`;
    }

    getWeather = async (req, res, apiKey) => {
        const city = req.body.city;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        const weatherInCity = await axios.get(url).then((response) => 
        response.data.main.temp).catch((err) => {
            console.log(err);
        });

        const beautifulName = this.changeName(city);

        return `It's now ${weatherInCity} degrees in ${beautifulName}`;
    }
}

module.exports = Weather;