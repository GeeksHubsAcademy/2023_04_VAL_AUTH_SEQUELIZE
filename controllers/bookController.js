const { Book } = require("../models");

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

module.exports = bookController;