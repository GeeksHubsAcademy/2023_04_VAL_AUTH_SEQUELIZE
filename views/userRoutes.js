const userController = require('../controllers/userController');
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', auth, isSuperAdmin, userController.getAllUsers)
router.get('/get-books-favorites', auth, userController.getUsersBooksFavorites)


module.exports = router;