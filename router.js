const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const bookRoutes = require('./views/bookRoutes')

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);

module.exports = router;