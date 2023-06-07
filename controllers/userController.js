const { User, Book } = require('../models')
const userController = {}

userController.getAllUsers =  async(req, res) => {
    try {
        const users = await User.findAll();

        return res.json({
            success: true,
            message: "users retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Users cant be retrieved",
                error: error
            }
        )    
    }
}

userController.getUsersBooksFavorites = async(req, res) => {
    try {
        const userId = req.userId;

        const userBookFavorites = await User.findByPk(
            userId,
            {
                attributes: {
                    exclude: ["password"]
                },
                // include: Book,
                include: [
                    {
                        attributes: {
                            exclude: ["updatedAt"]
                        },
                        model: Book,
                       
                    }
                ]
            }
        )

        return res.json({
            success: true,
            message: "user books favoritesretrieved",
            data: userBookFavorites
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Books favorites cant be retrieved",
                error: error
            }
        )    
    }
}

module.exports = userController;