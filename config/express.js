var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    env = require('./env/development'),
    mysql = require('mysql'),
    connection = require('express-myconnection');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: env.sessionSecret //'SecrectCookie'
    }));

    app.use(
        connection(mysql, {
            host: 'localhost',
            user: 'nodejs',
            password: 'Vistaar123',
            port: 3306, //port mysql
            database: 'test'
        }, 'request')
    );

    app.set('views', './app/views');

    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};
