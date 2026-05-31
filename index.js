const express = require('express');

const app = express();
const PORT = 3000;

app.get('/nombres', (req, res) => {

    console.log("Diego");
    console.log("Juan");

    res.send("Juan Y Diego");

});

app.get('/planetas', (req, res) => {

    res.send("Marte y Jupiter");

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});