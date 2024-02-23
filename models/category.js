'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // one-to-many makanan
            Category.hasMany(models.Makanan, {
                as: 'makanan',
                foreignKey: {
                    name: 'category_id',
                    allowNull: false,
                    unique: false,
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'Makanan',
                        key: 'id',
                    },
                },
            });
        }
    }
    Category.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'Category',
        }
    );
    return Category;
};
