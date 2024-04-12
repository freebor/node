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
      role: joi.string().required(),
    });
    return schema.validate(admin);
  }
  
  module.exports = { validateAdmin };
  