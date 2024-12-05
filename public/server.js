const express = require('express');
const app = express();

// Sirve archivos estáticos
app.use(express.static(__dirname));

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución: http://localhost:${PORT}`);
});
