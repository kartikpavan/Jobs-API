const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
   let customError = {
      statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
      message: err.message || "Something Went Wrong",
   };
   if (err instanceof CustomAPIError) {
      return res.status(err.statusCode).json({ msg: err.message });
   }
   //  return res.status(customError.statusCode).json({ msg: customError.message });
   return res.status(customError.statusCode).json({ msg: customError.message });
};

module.exports = errorHandlerMiddleware;
