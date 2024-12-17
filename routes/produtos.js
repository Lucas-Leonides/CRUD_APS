import express from "express";
import Produto from "../models/Produto.js";
import cloudinary from "../cloudinaryConfig.js";
import multer from "multer";

const router = express.Router();

// Configuração do Multer para aceitar arquivos de imagem
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Rota: Obter todos os produtos
router.get("/", async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos.", error });
  }
});

// Rota: Criar novo produto com imagem
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";

    // Se houver uma imagem, faça o upload para o Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${req.file.buffer.toString("base64")}`, // Upload em base64
        { folder: "produtos" } // Pasta no Cloudinary
      );
      imageUrl = result.secure_url; // URL da imagem hospedada
    }

    const newProduto = await Produto.create({
      ...req.body,
      imageUrl,
    });

    res.status(201).json(newProduto);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar produto.", error: error.message });
  }
});

// Rota: Atualizar produto existente
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = req.body.imageUrl;

    // Se houver nova imagem, faça o upload
    if (req.file) {
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${req.file.buffer.toString("base64")}`,
        { folder: "produtos" }
      );
      imageUrl = result.secure_url;
    }

    const updatedProduto = await Produto.findByIdAndUpdate(
      req.params.id,
      { ...req.body, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedProduto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    res.status(200).json(updatedProduto);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar produto.", error: error.message });
  }
});

// Rota: Deletar produto
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduto = await Produto.findByIdAndDelete(req.params.id);
    if (!deletedProduto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar produto.", error });
  }
});

export default router;
