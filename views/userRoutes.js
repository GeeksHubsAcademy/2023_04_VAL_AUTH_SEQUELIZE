const userController = require('../controllers/userController');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', auth, userController.getAllUsers)

module.exports = router;