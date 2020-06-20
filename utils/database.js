const Sequelize = require('sequelize');

const DB_NAME = 'chocolab';
const USER_NAME = 'root';
const PASSWORD = 'Kobebr24!';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;