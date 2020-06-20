module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Category.associate = models => {
        Category.hasMany(models.Good, {
            onDelete: "cascade"
        })
    }

    return Category
}