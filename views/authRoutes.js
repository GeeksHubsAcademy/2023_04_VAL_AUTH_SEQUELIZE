const router = require('express').Router();
const authController = require('../controllers/authController')
// importamos solo register
// const { register} = require('../controllers/authController')

router.post('/register', authController.register);
router.post('/login', authController.login);

// importamos solo register
// router.post('/register', register);

module.exports = router;
