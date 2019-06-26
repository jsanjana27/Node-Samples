const User = require('../models/user.model');

exports.addUser = async function (req, res, next) {
    var user = req.body;

    var response = await User.addUser(user);
    if (response == 1) {
        delete user.password;
        res.send(user);
    } else if (response == 0) {
        res.send("User Already exists")
    } else {
        res.send("Please try again later");
    }
}

exports.getAllUsers = async function (req, res, next) {
    User.getAllUsers();
    return res.send(User.getAllUsers());
}

exports.updateUser = async function (user) {
    var response = await User.updateUser(user);
    if (response == 1) {
        delete user.password;
        res.send(user);
    } else if (response == 0) {
        res.send("User doesn't exist")
    } else {
        res.send("Please try again later");
    }
}

exports.deleteUser = async function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    var response = await User.deleteUser(id);
    res.send("Deleted")
}

exports.getById = async function (req, res ,next) {
    var id = req.params.id;
    var response = await User.getById(id);
    res.send("Success");
}