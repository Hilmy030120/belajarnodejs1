const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');
const categoryController = require('../controller/category-controller');

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

// categori route
router.get('/category', categoryController.getAll);
router.post('/category', categoryController.createCategory);
router.put('/category', categoryController.editCategory);
router.delete('/category', categoryController.deleteCategory);

module.exports = router;
