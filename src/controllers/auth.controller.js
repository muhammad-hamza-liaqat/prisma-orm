const statusCodes = require("http-status-codes");

const prisma = require("../../prisma/client");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { sendError, sendSuccess } = require("../utils/responseHandler");

const userSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await prisma.user.findUnique({ where: { email } });
  if (userExist) {
    sendError(
      res,
      statusCodes.BAD_REQUEST,
      "user with this email already exist!"
    );
  }
  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
    select: { id: true, name: true, email: true, createdAt: true },
  });
  // console.log("user created", user);
  return sendSuccess(
    res,
    statusCodes.CREATED,
    "user created successfully",
    user
  );
};

module.exports = {
  userSignUp,
};
