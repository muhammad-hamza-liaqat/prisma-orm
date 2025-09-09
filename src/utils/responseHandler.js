const sendSuccess = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({
    success: true,
    status: statusCode,
    // message: res.__(messageKey), for i18n-node
    message,
    data,
  });
};

const sendError = (res, statusCode, message, details = {}) => {
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    // message: res.__(messageKey), for i18n-node
    message,
    details,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
