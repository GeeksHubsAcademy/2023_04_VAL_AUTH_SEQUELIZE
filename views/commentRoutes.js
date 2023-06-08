const commentController = require('../controllers/commentController');

const router = require('express').Router();

router.get('/:id', commentController.getCommentsByBookId);

module.exports = router;