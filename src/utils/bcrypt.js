const bcrypt = require("bcryptjs");
const { SALT_ROUNDS } = require("../config/env");

async function hashPassword(password) {
  return await bcrypt.hash(password, Number(SALT_ROUNDS));
}

async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
