require("dotenv").config();

const development = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT
};
const test = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT
};
const production = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT
};

module.exports = { development, test, production };
