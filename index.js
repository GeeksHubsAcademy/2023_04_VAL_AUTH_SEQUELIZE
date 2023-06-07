const express = require('express');
const db = require('./db');
const router = require('./router');
const auth = require('./middlewares/verifyToken')

const authController = require('./controllers/authController');
const serviceController = require('./controllers/serviceController');

const app = express();

const PORT = 3000;

app.use(express.json());

// gestiona las rutas de router.js
app.use(router);

app.get('/health', auth, (req, res) => {
    return res.send('healthy');
});

// SERVICES
app.post('/services', auth,serviceController.createService)
app.get('/services', serviceController.getAllService)
app.put('/services/:id',serviceController.updateService)
app.delete('/services/:id', serviceController.deleteService)


db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})

