const { Favorite } = require('../models');
const favoriteController = {}

favoriteController.createFavoriteBook = async(req, res) => {
    try {
        const bookId = req.body.book_id;
        const userId = req.userId;

        const favorite = await Favorite.create(
            {
                user_id: userId,
                book_id: bookId
            }
        );

        return res.json(
            {
                success: true,
                message: "Favorite Book created",
                data: favorite
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Favorite Book cant be created",
                error: error
            }
        )
    }

}

module.exports = favoriteController;