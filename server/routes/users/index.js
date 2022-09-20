const router = require("express").Router();
const {
  getOneUser,
  addUser,
  loginUser
} = require("../../controllers/users/index.js");

// USERS ROUTES
router.route("/");
router.get("/:id", getOneUser);
router.post("/", addUser);
router.post("/login", loginUser);

module.exports = router;
