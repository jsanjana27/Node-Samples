
const mysql = require('mysql');
// const mongoose = require('mongoose');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("h");
// });

// exports.test = function(req,res) {
//   res.render('test');
// };

exports.mysqlDB = db;



