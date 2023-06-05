const express = require('express');

const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
    return res.send('healthy');
});

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
})


