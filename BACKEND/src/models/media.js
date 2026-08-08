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

            
            image_url: {
                type: DataTypes.STRING(255),
                allowNull: true
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