const express = require('express');
const errorHandler = require('./middlewares/errorHandler')

// Configurando ambiente
require('dotenv').config();

const app = express();

// Configurando Json
app.use(express.json());

// Configurando Rotas
require('./routes')(app);

// Configurando tratamento genérico de erros
app.use(errorHandler);  

// Abrindo porta para a API
app.listen(process.env.PORT, function () {
    console.log(`A API do site está na porta ${process.env.PORT}!`);
});