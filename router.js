const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const bookRoutes = require('./views/bookRoutes')
const userRoutes = require('./views/userRoutes')
const favoriteRoutes = require('./views/favoriteRoutes')

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes)

module.exports = router;