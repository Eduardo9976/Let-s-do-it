const router = require("express").Router();
const {
  getToDoList,
  addToDo,
  deleteToDo,
  updateToDo,
} = require("../../controllers/toDo/index.js");

// TO DO ROUTES
router.route("/");
router.get("/", getToDoList);
router.post("/", addToDo);
router.delete("/:id", deleteToDo);
router.put("/:id", updateToDo);

module.exports = router;
