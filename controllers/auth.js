const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
   const user = await User.create({ ...req.body });
   const token = user.createJWT();
   res.status(StatusCodes.CREATED).json({
      user: { name: user.name },
      token,
   });
};

const login = async (req, res) => {
   const { email, password } = req.body;
   // Check for email and password
   if (!email || !password)
      throw new BadRequestError("Please Provide Email and Password");
   const user = await User.findOne({ email });
   // check if user exist
   if (!user) throw new UnauthenticatedError("Invalid Credentials");
   // if user exist then compare password
   const isPasswordCorrect = await user.comparePasswords(password);
   if (!isPasswordCorrect)
      throw new UnauthenticatedError("Password did not Match");
   // if user exists then generate token instance
   const token = user.createJWT();
   res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
