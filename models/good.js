module.exports = (sequelize, DataTypes) => {

    const Goods = sequelize.define('Good', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true
        },
        kind: {
            type: DataTypes.STRING,
            allowNull: false
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
        Goods.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Good
}