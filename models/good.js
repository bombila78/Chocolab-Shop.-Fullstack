module.exports = (sequelize, DataTypes) => {

    const Good = sequelize.define('Good', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    Good.associate = models => {
        Good.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Good
}