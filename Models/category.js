const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('category', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
        createdAt: false,
        updatedAt: false,
        tableName: 'category'


    });

  module.exports = Category;  

  