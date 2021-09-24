const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Picture = sequelize.define('photos', {
    // Model attributes are defined here
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.NUMBER
      // allowNull defaults to true
    }}, {
        createdAt: false,
        updatedAt: false,

    });

  module.exports = Picture;  

  