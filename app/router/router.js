const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');

router.get('/users', userController.getAll);
router.get('/user', userController.detailUser);
router.post('/users', userController.createUser);
router.put('/users', userController.editUser);

module.exports = router;
