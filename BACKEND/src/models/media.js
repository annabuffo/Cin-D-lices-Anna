/*import { Model } from 'sequelize';
import { sequelize, DataTypes } from './index.js';

export default (sequelize, DataTypes) => {
    class Media extends Model {
        static asssociate(models) {
            Media.hasMany(models.Order, {
                foreignKey: 'media_id',
                as: 'order',
                onDelete: 'CASCADE'
            });
        }
    }

    Media.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        type: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

    }, {
        sequelize,
        modelName: 'Media',
        tableName: 'media',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updateAt: 'update_at'
    });

    return Media;
};*/

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Media extends Model {
        static associate(models) {
            Media.hasMany(models.Recipe, {
                foreignKey: "media_id",
                as: "recipes",
                onDelete: "CASCADE"
            });
        }
    }

    Media.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            title: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            type: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    isIn: [["film", "serie"]]
                }
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },

            release_date: {
                type: DataTypes.DATEONLY,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: "Media",
            tableName: "media",
            timestamps: false,
            underscored: true
        }
    );

    return Media;
};