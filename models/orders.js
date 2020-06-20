const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const good = require('./goods');

const order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    goods: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    clientName: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    clientPhone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = order;