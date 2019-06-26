const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./app/helpers/jwt');
const middleware = require('./middleware');
const jwtSecret = require('./app/helpers/jwt');
const apiRouter = require('./app/routes/router');


function main() {
    let app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    // app.use(jwt());

    app.use('/api', apiRouter);
    const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
    const server = app.listen(port, function () {
        console.log('Server listening on port ' + port);
    });
}


main();
