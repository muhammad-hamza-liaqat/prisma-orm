const express = require("express");
const myRoutes = express.Router();
const { unauthorizedRoutes } = require("./unauthorizedRoutes/index");

myRoutes.use("", unauthorizedRoutes);

module.exports = myRoutes;
