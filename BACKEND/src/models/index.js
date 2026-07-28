import { DataTypes } from "sequelize";
import sequelize from "./database/database.js";

import  CategoryModel  from "./category.js";
import  CommentModel  from "./comment.js";
import  MediaModel  from "./media.js";
import  RecipeModel  from "./recipe.js";
import  UserModel  from "./user.js";

const Recipe = RecipeModel(sequelize, DataTypes);
const Category = CategoryModel(sequelize, DataTypes);
const Media = MediaModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const models = {
    User,
    Recipe,
    Category,
    Media,
    Comment
};

Object.values(models).forEach((model) => {
    if (typeof model.associate === "function") {
        model.associate(models);
    }
});

export {
    sequelize,
    User,
    Recipe,
    Category,
    Media,
    Comment
};

