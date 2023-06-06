const authController = require('../controllers/authController');
const bookController = require('../controllers/bookController');
const isAdmin = require('../middlewares/isAdmin');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.post('/', auth, isAdmin, bookController.createBook)
router.put('/:id', auth, isAdmin, bookController.updateBook)
router.delete('/:id', auth, isAdmin, bookController.deleteBook)

module.exports = router;