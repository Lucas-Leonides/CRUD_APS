import express from "express";
import mongoose from 'mongoose' 
import dotenv from "dotenv";
dotenv.config();



const app = express();

app.use(express.json());



// Conexão com o MongoDB
mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(() => console.log("Banco de dados conectado"))
    .catch((error) => console.log("Erro ao conectar ao banco de dados:", error));

// Inicializando o servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
