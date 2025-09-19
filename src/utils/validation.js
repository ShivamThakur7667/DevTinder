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

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "imageURL",
    "gender",
    "age",
    "about",
    "skills",
  ];

console.log("Incoming body:", req.body);


  const isAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  console.log("Validation result:", isAllowed);

  return isAllowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
};
