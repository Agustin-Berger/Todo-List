const express = require("express");
const router = express.Router();

let tasks = [
  { id: 1, title: "Aprender Node.js", completed: false },
  { id: 2, title: "Configurar el backend", completed: false },
];

// Ruta para obtener todas las tareas
router.get("/", (req, res) => {
  res.json(tasks);
});

// Ruta para agregar una nueva tarea
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "El título es requerido." });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
