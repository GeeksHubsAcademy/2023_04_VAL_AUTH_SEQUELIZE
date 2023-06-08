const { Book, Comment, User } = require('../models');

const commentController = {}

commentController.getCommentsByBookId = async (req, res) => {
    try {
        const bookId = req.params.id

        const getBookWithComments =  await Book.findByPk(
            bookId,
            {
                // include: [
                //     {
                //         model: Comment,
                //         // include: [
                //         //     {
                //         //         model: User,
                //         //         // attributes: {
                //         //         //     exclude: ['password']
                //         //         // }
                //         //     }
                //         // ]
                //     },
                // ]
            }
        );

        return res.json(
            {
                success: true,
                message: "Get comments by book id: " + req.params.id,
                data: getBookWithComments
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Cant retrieve comments of Book",
                error: error.message
            }
        )
    }
}

module.exports = commentController;