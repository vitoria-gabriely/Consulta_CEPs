import express from "express";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ quiet: true });

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const publicPath = path.join(import.meta.dirname, "..", "public");

app.use('/assets', express.static(path.join(publicPath, 'assets')));

// qualquer caminho será direcionada para index.html
app.use(function (_req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
