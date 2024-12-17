import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; 

// Importa a rota de produtos
import produtoRoutes from "./routes/produtos.js";

dotenv.config();

const app = express();
app.use(cors()); // Adicionando o middleware CORS
app.use(express.json());

// Rotas
app.use("/produtos", produtoRoutes);

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Banco de dados conectado"))
  .catch((error) => console.log("Erro ao conectar ao banco de dados:", error));

export default app;
