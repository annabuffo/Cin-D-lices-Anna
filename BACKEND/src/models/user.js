import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Recipe, {
                foreignKey: "user_id",
                as: "recipes",
                onDelete: "CASCADE",
            });

            User.hasMany(models.Comment, {
                foreignKey: "user_id",
                as: "comments",
                onDelete: "CASCADE",
            });
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            username: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },

            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },

            password_hash: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },

            role: {
                type: DataTypes.STRING(50),
                allowNull: false,
                defaultValue: "user",
                validate: {
                    isIn: [["user", "admin"]],
                },
            },

            birth_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },

            date_created: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",

            timestamps: true,
            createdAt: "date_created",
            updatedAt: false,

            underscored: true,
        }
    );

    return User;
};