const express = require("express");
const app = express();
const PORT = 3001;

// Middleware para procesar JSON
app.use(express.json());

// Importar las rutas
const tasksRouter = require("./routes/tasks");

// Usar las rutas
app.use("/tasks", tasksRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
