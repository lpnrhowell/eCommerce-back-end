const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

    sequelize = new Sequelize('ecommerce_db', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        port: 8889
    });

module.exports = sequelize;