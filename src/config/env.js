const dotenv = require("dotenv");
dotenv.config();

const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
};
// console.log("env---->", ENV);

module.exports = ENV;
