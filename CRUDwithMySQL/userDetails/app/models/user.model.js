const db = require('../config/db');
const express = require("express");
var app = express();

exports.getAllUsers = function (req, res) {

    db.mysqlDB.query("select * from userModel", function (err, rows) {
        if (err) {
            return res.json({ 'error': true, 'message': 'Error occurred' + err });
        }
    });
}

exports.addUser = function (data) {
    let insertQuery = 'INSERT INTO userModel (name,email,password,attendance,working_hours) VALUES(?,?,?,?,?)';
    let query = db.mysqlDB.format(insertQuery, [data.name, data.email, data.password, data.attendance, data.working_hours]);

    return new Promise(function (resolve, reject) {
        var data = db.mysqlDB.query(query, (err, response) => {
            if (err) {
                console.error(err);
                reject(-1);
            }

            if (response.affectedRows == 1) {
                resolve(1);
            } else {
                resolve(0);
            }
        });
    })
}

exports.getById = function (id) {
   let selectQuery = 'SELECT name, email from userModel WHERE id = ?';
    let query = db.mysqlDB.format(selectQuery, [id]);

    db.mysqlDB.query(query, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    })
}

exports.updateUser = function (user) {
    console.log(user.name);
    let updateQuery = 'UPDATE userModel SET name = ?, email = ?, attendance = ?, working_hours = ?  WHERE id=?';
    let query = db.mysqlDB.format(updateQuery, [user.name, user.email, user.attendance, user.working_hours, user.id]);

    return new Promise(function (resolve, reject) {
        var data = db.mysqlDB.query(query, (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    })
}

exports.deleteUser = function (id) {
    let deleteQuery = 'DELETE from userModel WHERE id = ?';
    let query = db.mysqlDB.format(deleteQuery, [id]);

    db.mysqlDB.query(query, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    })

}
