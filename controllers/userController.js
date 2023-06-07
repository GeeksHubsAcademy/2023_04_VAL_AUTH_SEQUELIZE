const { User } = require('../models')
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

module.exports = userController;