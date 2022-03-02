"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const clothes = require("./clothes.js");
const food = require("./food.js");


const postgresURL =
  process.env.NODE_ENV == "test" ? "sqlite:memory" : process.env.DATABASE_URL;
const sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } } }
    : {};
const sequelize = new Sequelize(postgresURL, sequelizeOptions);

module.exports = {
  db: sequelize,
  Clothes: clothes(sequelize, DataTypes),
  Food: food(sequelize, DataTypes),
};
