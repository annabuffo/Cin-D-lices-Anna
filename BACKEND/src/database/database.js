import { Sequelize } from "sequelize";

import "dotenv/config";

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
          dialect: "postgres",
          logging: false,
      })
    : new Sequelize(
          process.env.DB_NAME || "cin_delices",
          process.env.DB_USER || "postgres",
          process.env.DB_PASSWORD || "",
          {
              host: process.env.DB_HOST || "localhost",
              port: Number(process.env.DB_PORT || 5432),
              dialect: "postgres",
              logging: false,
          }
      );

export default sequelize;