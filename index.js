const express = require('express');
const db = require('./db');

const authController = require('./controllers/authController');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    return res.send('healthy');
});

app.post('/register', authController.register);

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})

