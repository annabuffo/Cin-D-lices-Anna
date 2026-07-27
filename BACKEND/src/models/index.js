import sequelize from "sequelize"; 
import { DataTypes } from "../database/database.js";

import { CategoryModel } from "../models/category.js";
import { CommentModel } from "../models/comment.js";
import { MediaModel } from "../models/media.js";
import { RecipeModel } from "../models/recipe.js";
import { UserModel } from "../models/user.js";

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

