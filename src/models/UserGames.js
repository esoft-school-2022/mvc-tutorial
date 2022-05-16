const client = require('../database');

class UserGames {

    getUserGames = async () => {
        const query = 'SELECT * FROM user_games ORDER BY id ASC';
        return await client.query(query);
    }
}

module.exports = UserGames;