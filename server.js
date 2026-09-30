const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Define a pasta public como pasta dos arquivos do site
app.use(express.static(path.join(__dirname, "public")));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});