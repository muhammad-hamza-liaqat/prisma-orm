const dotenv = require("dotenv");
dotenv.config();

const requiredEnv = ["NODE_ENV", "PORT", "DATABASE_URL", "SALT_ROUNDS"];

const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
};

const missingEnv = requiredEnv.filter((key) => !ENV[key]);

if (missingEnv.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnv.join(", ")}`
  );
  process.exit(1);
}

module.exports = ENV;
