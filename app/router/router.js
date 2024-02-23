const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');

router.get('/users', userController.getAll);
router.get('/user', userController.detailUser);
router.post('/users', userController.createUser);
router.put('/users', userController.editUser);
router.delete('/user', userController.deleteUser);
router.get('/makanans', userController.getMakanan);
router.get('/makanan', userController.detailMakanan);
router.post('/makanan', userController.createMakanan);
router.put('/makanan', userController.editMakanan);
router.delete('/makanan', userController.deleteMakanan);

module.exports = router;
