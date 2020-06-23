module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define('Order', {
        goods: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        clientName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clientPhone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Order
}