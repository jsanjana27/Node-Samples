const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employee", { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../models/user.model')
};


// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'employee'
// });
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// exports.mysqlDB = db;

