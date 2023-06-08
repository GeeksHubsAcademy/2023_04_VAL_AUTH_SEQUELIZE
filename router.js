const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const bookRoutes = require('./views/bookRoutes')
const userRoutes = require('./views/userRoutes')
const favoriteRoutes = require('./views/favoriteRoutes')
const commentRoutes = require('./views/commentRoutes')


router.use('/auth', authRoutes);
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/comments', commentRoutes);

module.exports = router;