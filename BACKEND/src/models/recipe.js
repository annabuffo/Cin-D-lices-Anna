/*import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Recipe extends Model {
        static associate(models) {
            Recipe.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "author",
                onDelete: "CASCADE"
            });

            Recipe.belongsTo(models.Category, {
                foreignKey: "category_id",
                as: "category",
                onDelete: "CASCADE"
            });

            Recipe.belongsTo(models.Media, {
                foreignKey: "media_id",
                as: "media",
                onDelete: "CASCADE"
            });

            Recipe.hasMany(models.Comment, {
                foreignKey: "recipe_id",
                as: "comments",
                onDelete: "CASCADE"
            });
        }

        getTotalTime() {
            return (this.prep_time || 0) + (this.cook_time || 0);
        }
    }

    Recipe.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            title: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },

            ingredients: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            instructions: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            image_url: {
                type: DataTypes.STRING(255),
                allowNull: true
            },

            prep_time: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            cook_time: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            date_created: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            media_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Recipe",
            tableName: "recipes",
            timestamps: true,
            createdAt: "date_created",
            updatedAt: false,
            underscored: true
        });

    return Recipe;
};*/

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Recipe extends Model {
        static associate(models) {
            Recipe.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "author",
                onDelete: "CASCADE"
            });

            Recipe.belongsTo(models.Category, {
                foreignKey: "category_id",
                as: "category",
                onDelete: "CASCADE"
            });

            Recipe.belongsTo(models.Media, {
                foreignKey: "media_id",
                as: "media",
                onDelete: "CASCADE"
            });

            Recipe.hasMany(models.Comment, {
                foreignKey: "recipe_id",
                as: "comments",
                onDelete: "CASCADE"
            });
        }

        getTotalTime() {
            return (this.prep_time || 0) + (this.cook_time || 0);
        }
    }

    Recipe.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            title: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },

            ingredients: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            instructions: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            image_url: {
                type: DataTypes.STRING(255),
                allowNull: true
            },

            prep_time: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            cook_time: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            date_created: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            media_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Recipe",
            tableName: "recipes",
            timestamps: true,
            createdAt: "date_created",
            updatedAt: false,
            underscored: true
        }
    );

    return Recipe;
};