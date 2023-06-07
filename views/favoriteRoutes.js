const favoriteController = require('../controllers/favoriteController');
const auth = require('../middlewares/verifyToken');

const router = require('express').Router();

router.post('/', auth,favoriteController.createFavoriteBook)

module.exports = router;