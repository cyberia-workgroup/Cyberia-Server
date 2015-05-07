var express = require('express'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    lusca = require('lusca'),
    multer = require('multer'),
    compress = require('compression'),
    swig = require('swig'),

    _ = require('lodash'),
    MongoStore = require('connect-mongo')(session),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    expressValidator = require('express-validator'),
    connectAssets = require('connect-assets'),

    app = express();

// Load configuration files
var config = require('./config/config');
var database = require('./config/database');
var secrets = require('./config/secrets');

// We'll work on this more
mongoose.connect(process.env.MONGO_URI || database.mongo.uri);
mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

app.set('port', process.env.PORT || config.port || 3000);
// Set the renderer
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Set up express middleware
app.use(compress());
app.use(connectAssets({
    paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')]
}));
//app.use(logger(process.env.NODE_ENV || config.environment || 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: path.join(__dirname, 'uploads') }));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({ url: database.mongo.uri, autoReconnect: true })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(lusca({
    csrf: true,
    xframe: 'SAMEORIGIN',
    xssProtection: true
}));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 1000 }));

// Define routes
app.get('/', function(req, res) {
    // Sample
    var schema = require('./dist/tests/node-test-data' );
    res.render('index', { schema: schema });
});

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
    //console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;