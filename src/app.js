const express = require('express');
const app = express();
const router = require('./router');

const PORT = 5000;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use('/', router);

app.listen(PORT, () => {
    console.log(`The server is now running on Port ${PORT}`);
});