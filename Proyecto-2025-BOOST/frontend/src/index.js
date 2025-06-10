const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/mensaje', (req, res) => {
  res.json([{ texto: "¡Hola desde el backend real!" }]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
