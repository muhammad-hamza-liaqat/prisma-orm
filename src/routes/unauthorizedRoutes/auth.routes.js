const express = require("express");
const authRoutes = express.Router();
const { catchAsyncErrors, validationCatches } = require("../../utils/tryCatch");
const { signupValidation } = require("../../validations/index");
const { userSignUp } = require("../../controllers/auth.controller");

authRoutes.post(
  "/sign-up",
  validationCatches(signupValidation),
  catchAsyncErrors(userSignUp)
);

module.exports = { authRoutes };
