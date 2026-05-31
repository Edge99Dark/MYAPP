const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/planetas/nombres', (req, res) => {

    const nombres = [
        'García',
        'Martínez',
        'López',
        'Hernández',
        'Ramírez'
    ];

    const planetas = [
        'Marte',
        'Júpiter'
    ];

    res.render('index', {
        nombres,
        planetas
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});