const bookController = require('../controllers/bookController');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.post('/', auth, bookController.createBook)

module.exports = router;