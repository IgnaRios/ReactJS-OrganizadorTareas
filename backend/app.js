const express = require('express');

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
app.use(express.json());





const server = app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ', PORT)
});