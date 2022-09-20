const helpers = require("../../helpers/index.js");

const findOneToDo = (id) =>
  helpers.readDBFile("to-do").find((toDo) => toDo.id === id);

const filterToDoByOwner = (toDoList, ownerId) =>
  toDoList.filter((toDo) => toDo.owner === Number(ownerId));

const getToDoList = (req, res, next) => {
  const owner = req.query.owner;

  try {
    let toDoList = helpers.readDBFile("to-do");
    toDoList = filterToDoByOwner(toDoList, owner);
    return res.status(200).json(toDoList);
  } catch (error) {
    next({ errorMessage: "Service unavailable." });
  }
};

const addToDo = (req, res, next) => {
  const { task, done, owner } = req.body;

  if (task?.length > 4 && owner > 0) {
    try {
      let toDoList = helpers.addInDBFile("to-do")({
        task,
        owner,
        done: done || false,
      });
      toDoList = filterToDoByOwner(toDoList, owner);
      return res.status(201).json(toDoList);
    } catch (error) {
      next({ errorMessage: "Service unavailable." });
    }
  }

  next({ errorMessage: "Check the fields", status: 400 });
};

const deleteToDo = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existToDo = findOneToDo(id);

    if (existToDo) {
      helpers.deleteInDBFile("to-do")(id);
      return res.status(204).end();
    }

    next({ errorMessage: "Task unavailable", status: 400 });
  } catch (error) {
    next({ errorMessage: "Service unavailable." });
  }
};

const updateToDo = (req, res, next) => {
  const id = Number(req.params.id);
  const { task } = req.body;
  const existToDo = findOneToDo(id);

  try {
    if ((existToDo && task?.length > 4) || req.body.hasOwnProperty("done")) {
      let toDoList = helpers.updateInDBFile("to-do")(id, { ...req.body });
      toDoList = filterToDoByOwner(toDoList, existToDo.owner);
      return res.status(200).json(toDoList);
    }
  } catch (error) {
    next({ errorMessage: "Service unavailable." });
  }

  next({ errorMessage: "Check the fields", status: 400 });
};

module.exports = {
  getToDoList,
  addToDo,
  deleteToDo,
  updateToDo,
};
