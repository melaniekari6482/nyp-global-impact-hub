const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.get("/api/prueba", (req, res) => {
  res.json({
    mensaje: "Hola desde Express"
  });
});

// LOGIN
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "demo@demo.com" && password === "demo123") {
    return res.json({
      token: "token-demo",
      usuario: {
        email
      }
    });
  }

  return res.status(401).json({
    message: "Credenciales inválidas"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});