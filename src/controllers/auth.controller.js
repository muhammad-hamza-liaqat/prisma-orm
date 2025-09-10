const statusCodes = require("http-status-codes");
const prisma = require("../../prisma/client");
const { hashPassword } = require("../utils/bcrypt");
const { sendError, sendSuccess } = require("../utils/responseHandler");
const { generateWalletQRCode } = require("../utils/qrCode");

const userSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await prisma.user.findUnique({ where: { email } });
  if (userExist) {
    return sendError(
      res,
      statusCodes.BAD_REQUEST,
      "User with this email already exists!"
    );
  }

  const hashedPassword = await hashPassword(password);

  const userWithWallet = await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: { name, email, password: hashedPassword },
      select: { id: true, name: true, email: true },
    });

    const wallet = await tx.wallet.create({
      data: { userId: newUser.id, balance: 0 },
      select: { id: true, balance: true, userId: true },
    });

    const qrCodeBase64 = await generateWalletQRCode(wallet.id);

    const updatedWallet = await tx.wallet.update({
      where: { id: wallet.id },
      data: { qrCode: qrCodeBase64 },
    });

    return { ...newUser, wallet: updatedWallet };
  });

  return sendSuccess(
    res,
    statusCodes.CREATED,
    "User created successfully with wallet and QR code",
    userWithWallet
  );
};

module.exports = {
  userSignUp,
};
