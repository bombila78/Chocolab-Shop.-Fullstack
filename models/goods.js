const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const good = sequelize.define('Good', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    info: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kind: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = good;