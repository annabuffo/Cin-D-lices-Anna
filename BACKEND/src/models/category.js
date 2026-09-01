import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Recipe, {
                foreignKey: "category_id",
                as: "recipes",
                onDelete: "CASCADE",
            });
        }
    }

    Category.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: "Category",
            tableName: "categories",
            timestamps: false,
            underscored: true,
        }
    );

    return Category;
};