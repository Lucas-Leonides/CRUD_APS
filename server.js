import app from "./app.js";

const PORT = process.env.PORT || 3000;
const IP = process.env.IP

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
