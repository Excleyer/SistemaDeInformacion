const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase.js');

const Pacientes = sequelize.define('pacientes', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nombres: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER, // Cambiado a INTEGER
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  lugarNacimiento: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  evaluacion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  piel: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  peso: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  talla: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  temperatura: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  cardio: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  abdomen: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  laboratorio: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  snc: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  inmunizaciones: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  idx: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  idRepresentante: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model : 'representantes',//Asegúrate de que el nombre de la tabla sea correcto
      key: 'id'
    }
  }
}, {
  timestamps: true // Para incluir columnas de `createdAt` y `updatedAt`
});

module.exports = Pacientes;