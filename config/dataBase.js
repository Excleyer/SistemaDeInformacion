const Sequelize = require('sequelize');

const sequelize = new Sequelize('pediatria',
  'Javier',
  'Javi20/**', 
  {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports=sequelize;