const express = require('express');
const db = require('./db');
const { User } = require('./models');
const bcrypt = require('bcrypt');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    return res.send('healthy');
});

app.post('/register', async(req, res) => {
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
})

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})

