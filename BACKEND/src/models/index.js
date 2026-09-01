import { DataTypes } from "sequelize";

import sequelize from "../database/database.js";

import CategoryModel from "./category.js";
import CommentModel from "./comment.js";
import MediaModel from "./media.js";
import RecipeModel from "./recipe.js";
import UserModel from "./user.js";

/* INITIALISATION DES MODELES */

const User = UserModel(sequelize, DataTypes);
const Recipe = RecipeModel(sequelize, DataTypes);
const Category = CategoryModel(sequelize, DataTypes);
const Media = MediaModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);

/* LISTE DES MODELES */

const models = {
    User,
    Recipe,
    Category,
    Media,
    Comment,
};

/* ASSOCIATIONS */

Object.values(models).forEach((model) => {
    if (typeof model.associate === "function") {
        model.associate(models);
    }
});

/* EXPORTS */

export {
    sequelize,
    User,
    Recipe,
    Category,
    Media,
    Comment,
};