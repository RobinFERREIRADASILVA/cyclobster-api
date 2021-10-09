const Sequelize = require('sequelize');

module.exports = new Sequelize("cyclobster", "robin", "pantyr77220", {
    dialect: "mysql",
    host: "localhost"
});