const { validationResult } = require("express-validator");

const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const blacklistTokenModel = require("../models/blacklisttoken.model");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { fullName, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(401).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({
    token,
    user,
  });
};

const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const validPassword = await user.comparePassword(password);
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({
    token,
    user,
  });
};

const getUserProfile = async (req, res, next) => {
  res.status(200).json({
    user: req.user,
  });
};

const logoutUser = async (req, res, next) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({ token });

  res.status(200).json({
    message: "User Logged out",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
};
