const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'dboptimization',
    user: 'postgres',
    password: 'admin'
})

client.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to db');
    }
});

module.exports = client;