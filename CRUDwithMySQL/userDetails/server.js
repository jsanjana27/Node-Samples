var express = require('express');
var apiRouter = require('./app/routes/routes');
var userModel = require('./app/models/user.model');
app = express();
var helmet = require('helmet')
var bodyParser = require('body-parser')
var useragent = require('express-useragent')

// Setup Middleware
app.use(helmet())
// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(useragent.express())

port = process.env.PORT || 8080

app.use('/api', apiRouter);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port)
