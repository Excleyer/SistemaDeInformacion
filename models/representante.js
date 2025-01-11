const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase.js');

const Representante = sequelize.define('representantes', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nombres: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cedula: {
    type: DataTypes.STRING(15), // Cambiado a STRING
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(100), // Cambiado a STRING(100) para mayor longitud
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(15), // Cambiado a STRING
    allowNull: false
  },
  telefonoEmergencia: {
    type: DataTypes.STRING(15), // Cambiado a STRING
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Representante;