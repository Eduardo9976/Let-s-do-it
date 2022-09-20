require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

express.urlencoded({ extended: true });
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/to-do", require("./routes/toDo/index.js"));
app.use("/api/users", require("./routes/users/index.js"));

app.use((error, req, res, next) => {
  if (error.errorMessage && error.status) {
    return res.status(error.status).json(error.errorMessage);
  }

  return res.status(500).send("Service unavailable.");
});

app.listen(PORT, () => console.log(`App running port ${PORT}`));
