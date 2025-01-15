const Sequelize = require('sequelize');

const sequelize = new Sequelize('pediatriaa',
  'Javier',
  'Javi20/**', 
  {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports=sequelize;