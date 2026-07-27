/*import { Sequelize } from "sequelize";
import { sequelize, DataTypes } from './index.js';

export default (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongTo(models.User, {
                foreignKey: 'user_id',
                as: 'author',
                onDelete: 'CASACADE'
            });

            Comment.belongTo(models.Recipe, {
                foreignKey: 'recipe_id',
                as: 'comments',
                onDelete: 'CASCADE'
            });
        }
    }

    Comment.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    }, {
        sequelize,
        modelName: "Comment",
        tableName: "comments",
        timestamps: true,
        createdAt: "date_created",
        underscored: true
    });

    return Comment;
};*/

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "author",
                onDelete: "CASCADE"
            });

            Comment.belongsTo(models.Recipe, {
                foreignKey: "recipe_id",
                as: "recipe",
                onDelete: "CASCADE"
            });
        }
    }

    Comment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false
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

            recipe_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Comment",
            tableName: "comments",
            timestamps: true,
            createdAt: "date_created",
            updatedAt: false,
            underscored: true
        }
    );

    return Comment;
};