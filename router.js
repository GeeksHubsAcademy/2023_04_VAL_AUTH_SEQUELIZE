const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const bookRoutes = require('./views/bookRoutes')
const userRoutes = require('./views/userRoutes')

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);
router.use('/users', userRoutes);

module.exports = router;