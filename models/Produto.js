import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  quantity: { type: Number, min: 0 },
  dateAdded: { type: Date, default: Date.now },
  productType: { type: String },
  imageUrl: { type: String }, // Armazena a URL da imagem enviada para o Cloudinary
});

export default mongoose.model("Produto", ProdutoSchema);
