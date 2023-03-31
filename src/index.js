const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { dirname } = require('path');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect DB
db.connect();

//Process static file
app.use(express.static(path.join(__dirname, 'public')));

//Process input data to server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Templete engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));

//Router
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
