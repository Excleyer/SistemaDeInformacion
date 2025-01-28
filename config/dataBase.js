const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/data.sqlite', // Ruta donde se almacenará la base de datos SQLite
  logging: false, // Cambia a true si deseas ver las consultas SQL en la consola
});

// Probar la conexión
const probarConexion = async () => {
  try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
  }
};

probarConexion();



module.exports=sequelize;