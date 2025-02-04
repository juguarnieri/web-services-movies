// 1. Carregar variáveis de ambiente
require("dotenv").config();

// 2. Importação das dependências
const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes"); 

// 3. Configuração da aplicação
const app = express();
const PORT = process.env.PORT || 3000;

// 4. Middlewares
app.use(cors()); 
app.use(express.json()); 

// 5. Definir as rotas a serem usadas
app.use("/api", movieRoutes);

// 6. Rota de teste 
app.get("/", (req, res) => {
    res.send("DEV DEMAIS");
});

// 7. Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
