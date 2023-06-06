const { Book } = require("../models");
const authController = require("./authController");

const bookController = {};

bookController.createBook = async(req, res) => {
    try {
        const { title, description } = req.body;

        //validaciones

        const newBook = await Book.create(
            {
                title: title,
                description
            }
        );
        
        return res.json({
            success: true,
            message: "Book created",
            data: newBook
        });       
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Book cant be created",
                error: error
            }
        )
    }
}

bookController.updateBook = async(req, res) => {
    try {
        const bookId = req.params.id;

        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.json(
                {
                    success: true,
                    message: "Book doesnt exists"
                }
            );
        };

        const { title, description } = req.body;

        const bookUpdated = await Book.update(
            {
                title: title,
                description: description
            },
            {
                where: {
                    id: bookId
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "Book updated",
                data: bookUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Book cant be updated",
                error: error
            }
        )
    }
}

bookController.deleteBook = async(req, res) => {
    try {
        const bookId = req.params.id;

        const deleteBook = await Book.destroy({
            where: {
                id: bookId
            }
        })

        return res.json(
            {
                success: true,
                message: "Book deleted successfully",
                data: deleteBook
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Book cant be deleted",
                error: error
            }
        )
    }
}

module.exports = bookController;