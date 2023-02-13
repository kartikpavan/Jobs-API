const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class BadRequestError extends CustomAPIError {
   constructor(message) {
      super(message);
      this.statucCode = StatusCodes.UNAUTHORIZED;
   }
}
module.exports = BadRequestError;
