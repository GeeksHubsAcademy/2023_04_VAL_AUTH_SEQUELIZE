const userController = require('../controllers/userController');
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', auth, isSuperAdmin, userController.getAllUsers)

module.exports = router;