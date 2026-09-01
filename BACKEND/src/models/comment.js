import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "author",
                onDelete: "CASCADE",
            });

            Comment.belongsTo(models.Recipe, {
                foreignKey: "recipe_id",
                as: "recipe",
                onDelete: "CASCADE",
            });
        }
    }

    Comment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            date_created: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            recipe_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Comment",
            tableName: "comments",

            timestamps: true,
            createdAt: "date_created",
            updatedAt: false,

            underscored: true,
        }
    );

    return Comment;
};