const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password, gender } = req.body;

  if (!firstName.length || !lastName) {
    throw new Error("Name is not valid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("password is not strong");
  }
};

module.exports = {
    validateSignUpData,
};