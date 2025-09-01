const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked !");
  const token = "shivam1234";
  const isAdminAuthorized = token === "shivam123";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("Admin auth is getting checked !");
  const token = "shivam123";
  const isAdminAuthorized = token === "shivam123";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
    adminAuth,
    userAuth
}