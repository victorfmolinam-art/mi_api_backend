const express = require('express');
const router = express.Router();
let productos = require('./data');

// GET
router.get('/productos', (req, res) => {
    res.json(productos);
});

// POST
router.post('/productos', (req, res) => {
    
    const nombre = req.body?.nombre;
    const precio = req.body?.precio;
    const categoria = req.body?.categoria;


    if (!nombre || typeof precio !== "number") {
        return res.status(400).json({ error: "Datos inválidos" });
    }

    const nuevo = {
        id: productos.length + 1,
        nombre,
        precio,
        categoria
    };

    productos.push(nuevo);
    res.status(201).json(nuevo);
});

// PUT
router.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ error: "No encontrado" });
    }

    Object.assign(producto, req.body);
    res.json(producto);
});

// DELETE
router.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "No encontrado" });
    }

    productos.splice(index, 1);
    res.json({ mensaje: "Eliminado" });
});

module.exports = router;
