const QRCode = require("qrcode");

const generateWalletQRCode = async (walletId) => {
  try {
    const qrData = `wallet:${walletId}`;
    const qrCodeBase64 = await QRCode.toDataURL(qrData);
    // console.log("qrCodeBase", qrCodeBase64)
    return qrCodeBase64;
  } catch (err) {
    console.error("Error generating QR code:", err);
    throw new Error("QR code generation failed");
  }
};

module.exports = { generateWalletQRCode };
