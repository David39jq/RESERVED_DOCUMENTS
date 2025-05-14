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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ===========================
// ARCHIVOS ESTÁTICOS
// ===========================
// Sirve todos los archivos desde la carpeta public directamente en "/"
app.use(express.static(path.join(__dirname, '..', 'public')));

// ===========================
// MANEJO DE SESIONES
// ===========================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // ⏳ 1 hora
}));


app.use((req, res, next) => {
  res.locals.session = req.session;
  console.log(req.session); // Agregar esta línea para verificar si la sesión se está guardando correctamente.
  next();
});


// ===========================
// RUTAS
// ===========================
// app.use(require("./routes/index"));
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const platosRoutes = require('./routes/index');
app.use('/platosdestacado', platosRoutes);

const userRoutes = require('./routes/signupRoutes');
app.use(userRoutes); // Esto registra /regUsuario correctamente

const reservaRoutes = require('./routes/listaReservacionRoutes');
app.use(reservaRoutes);  // Esto maneja las rutas para las reservas

const menuRoutes = require('./routes/menuRoutes');
app.use(menuRoutes); // Esto habilita /menu

const loginRoutes = require('./routes/loginRoutes'); // Importa la ruta de login
app.use(loginRoutes); // Registra las rutas de login

app.get('/', (req, res) => {
  res.render('index'); // Asegúrate de que este archivo sea el correcto.
});

app.get('/reserve', (req, res) => {
  res.render("reservas/reserve"); // NO pongas la extensión .ejs
});

app.get('/login', (req, res) => {
  res.render('login/login');  // Esto es clave
});

app.get('/sign-up', (req, res) => {
  res.render('registrarse/sign-up');  // Esto es clave
});

// ===========================
// LEVANTAR SERVIDOR
// ===========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
