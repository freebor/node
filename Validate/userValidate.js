const joi = require("joi");
const validateNewUser = (user) => {
  const schema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    firstName: joi.string().alphanum().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    confirmPassword: joi
      .string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    phoneNumber: joi.string().required(),
    address: joi.string().required(),
  });
  return schema.validate(user);
};

const validateUser = (user) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(user);
};

const validateAdmin = (admin) => {
  const schema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    firstName: joi.string().alphanum().min(3).max(30).required(),
    lastName: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    confirmPassword: joi
      .string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    phoneNumber: joi.string().required(),
    address: joi.string().required(),
  });
  return schema.validate(admin);
}

module.exports = { validateNewUser, validateUser, validateAdmin };
