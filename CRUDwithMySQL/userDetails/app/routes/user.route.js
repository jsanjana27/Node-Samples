var router = require('express').Router();
const userCtrl = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

router.route('/addUser')
    .post(asyncHandler(userCtrl.addUser));

router.route('/getAllUsers')
    .get(asyncHandler(userCtrl.getAllUsers));

router.route('/updateUser')
    .post(asyncHandler(userCtrl.updateUser));

router.route('/deleteUser/:id')
    .delete(asyncHandler(userCtrl.deleteUser));


    router.route('/getById/:id')
    .get(asyncHandler(userCtrl.getById));

module.exports = router;