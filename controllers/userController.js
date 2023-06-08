const { User, Book } = require('../models')
const { Op } = require('sequelize');

const userController = {}

userController.getAllUsers = async (req, res) => {
    try {
        let filter = {
            attributes: {
                exclude: ["password"]
            }
        };

        if (req.query.email) {
            filter.where = {
                    email: {
                       [Op.like]: "%" + req.query.email + "%"
                    }
            }
        }

        const users = await User.findAll(
            // {
            //     where: {
            //         email: "admin@admin.com"
            //     },
            //     attributes: {
            //         exclude: ["password"]
            //     }
            // },
            filter
        );

        if(users.length === 0) {
            return res.status(404).json({
                success: true,
                message: "Not users",
            })
        }

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
                error: error.message
            }
        )
    }
}

userController.getUsersBooksFavorites = async (req, res) => {
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