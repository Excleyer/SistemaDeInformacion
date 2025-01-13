require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const port = 3000;
const path = require('path');
const app = express();
//importar archivo de conexion a la base de datos .
const sequelize = require('./config/dataBase.js');

//importar routes
const routes = require('./routes/routes.js');
const session = require('express-session');

//configuracion de inicio de session
app.use(session({
	secret: 'secreKey',
	resave: false,
	saveUnitilized:false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 2 //dos horas
	}
}));




// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de recuperación de datos y envío
app.use(express.urlencoded({ extended:false}));

app.use(express.json());

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname,'/public')));

//usar routes.js
app.use('/',routes);

// Iniciar el servidor
app.listen(port, ()=>{
 	
 sequelize
 .authenticate()
 .then(()=>{
 	console.log(`Server running on port ${port}`);
 	console.log('conexion con la base de datos exitoso');
 	return sequelize.sync({force:false});
 })
 .catch((error)=>{
  console.error(error.message);
 })
});