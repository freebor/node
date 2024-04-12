const { validateNewUser, validateUser } = require("../Validate/userValidate");
const { hashPassword, checkPassword } = require("../Helpers/userHelper");
const User = require("../Models/User");
const addANewUser = async (req, res) => {
  try {
    const { error } = validateNewUser(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: error.details[0].message,
      });
    }
    if (req.body.password != req.body.confirmPassword) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: "password do not match",
      });
    }

    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: "email already exist",
      });
    }
    const numberExist = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (numberExist) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: "number already exist",
      });
    }

    let newPassword = await hashPassword(req.body.password);
    req.body.password = newPassword;
    const newUser = new User({
      userName: req.body.username,
      firstname: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      password: req.body.password,
    });

    await newUser.save();
    newUser.password = undefined;
    console.log(req.body);
    return res.status(201).json({
      status: 201,
      ok: true,
      message: "User added successfully"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      ok: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: error.details[0].message,
      });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: "user not found",
      });
    }
    const isMatch = await checkPassword(req.body.password, user.password)
    if (!isMatch) {
      return res.status(400).json({
        status: 400,
        ok: false,
        message: "Invalid email or password",
      });      
    }
    return res.status(200).json({
      status: 200,
      ok: true,
      message: "user found"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      ok: false,
      message: error.message,
    });
  }
};

module.exports = { addANewUser, loginUser };
