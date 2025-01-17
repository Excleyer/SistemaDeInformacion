const Sequelize = require('sequelize');

const sequelize = new Sequelize('pediatriaa',
  'Magleary',
  '123456', 
  {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports=sequelize;