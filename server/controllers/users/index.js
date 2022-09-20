const helpers = require("../../helpers/index.js");

const findOneUser = (searchContext) => {
  const [userKey] = Object.keys(searchContext);
  const [value] = Object.values(searchContext);

  return helpers.readDBFile("users").find((user) => user[userKey] === value);
};

const filterUserByEmail = (userList, email) =>
  userList.filter((user) => user.email === email);

const getOneUser = (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const userExist = findOneUser({ id });

    if (userExist) {
      return res.status(200).json(userExist);
    }
    next({ errorMessage: "Something wrong", status: 400 });
  } catch (error) {
    next({ errorMessage: "Service unavailable." });
  }
};

const addUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (name?.length > 4 && email?.length > 4 && password?.length >= 8) {
    try {
      const userExist = findOneUser({ email });

      if (userExist) {
        return next({ errorMessage: "E-mail already registered", status: 400 });
      }

      const usersList = helpers.addInDBFile("users")({
        name,
        email,
        password,
      });
      const [user] = filterUserByEmail(usersList, email);
      return res.status(201).json(user);
    } catch (error) {
      next({ errorMessage: "Service unavailable." });
    }
  }

  next({ errorMessage: "Check the fields", status: 400 });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  if (email?.length > 4 && password?.length >= 8) {
    try {
      const userExist = findOneUser({ email });

      if (userExist && password === userExist.password) {
        return res.status(200).json(userExist);
      }

      return next({ errorMessage: "Check the fields", status: 400 });
    } catch (error) {
      next({ errorMessage: "Service unavailable." });
    }
  }

  next({ errorMessage: "Check the fields", status: 400 });
};

module.exports = {
  getOneUser,
  addUser,
  loginUser,
};
