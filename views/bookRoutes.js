const bookController = require('../controllers/bookController');
const isAdmin = require('../middlewares/isAdmin');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.post('/', auth, isAdmin, bookController.createBook)

module.exports = router;