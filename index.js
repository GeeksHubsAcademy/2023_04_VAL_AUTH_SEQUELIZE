const express = require('express');
const db = require('./db');

const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
    return res.send('healthy');
});

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})


