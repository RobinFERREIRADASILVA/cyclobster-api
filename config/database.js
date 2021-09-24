const Sequelize = require('sequelize');

module.exports = new Sequelize("cyclobster", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});