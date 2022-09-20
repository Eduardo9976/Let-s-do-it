const helpers = require("../../helpers/index.js");

const findOneToDo = (id) =>
  helpers.readDBFile("to-do").some((toDo) => toDo.id === id);

const getToDoList = (req, res, next) => {
  try {
    const data = helpers.readDBFile("to-do");
    return res.status(200).json(data);
  } catch (error) {
    next({ errorMessage: "Service unavailable." });
  }
};

const addToDo = (req, res, next) => {
  const { task, done } = req.body;

  if (task?.length > 4) {
    try {
      const toDoList = helpers.addInDBFile("to-do")({
        task,
        done: done || false,
      });
      return res.status(201).send(toDoList);
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
      const data = helpers.updateInDBFile("to-do")(id, { ...req.body });
      return res.status(200).json(data);
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
