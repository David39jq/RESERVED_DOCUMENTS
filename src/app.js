// ===========================
// IMPORTAR LIBRERÍAS
// ===========================
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

// ===========================
// CONFIGURACIÓN DE VISTAS
// ===========================
// app.set('views', path.join(__dirname, '..', 'RESERVED_DOCUMENTS', 'src', 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ===========================
// MIDDLEWARES
// ===========================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ===========================
// ARCHIVOS ESTÁTICOS
// ===========================
// Sirve todos los archivos desde la carpeta public directamente en "/"
app.use(express.static(path.join(__dirname, '..', 'public')));

// ===========================
// MANEJO DE SESIONES
// ===========================
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: false
}));

// ===========================
// RUTAS
// ===========================
app.use(require("./routes/index"));

const platosRoutes = require('./routes/platosRoutes');
app.use('/platosdestacado', platosRoutes);


// ===========================
// LEVANTAR SERVIDOR
// ===========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
