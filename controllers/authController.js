const { User } = require('../models');
const bcrypt = require('bcrypt');
const authController = {};

authController.register = async(req, res) => {
    try {
        if (req.body.password.length < 4) {
            return res.send('Password must be longer than 4 characters');
        }

        const newPassword = bcrypt.hashSync(req.body.password, 8);

        const newUser = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: newPassword,
                role_id: 1
            }
        );

        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating users ' + error.message)
    }
}


module.exports = authController