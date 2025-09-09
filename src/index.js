const express = require("express");
const app = express();

const { PORT, NODE_ENV } = require("./config/env");
const myRoutes = require("./routes/index");
const requestLogger = require("./utils/requestLogger");
const notFoundHandler = require("./utils/notFoundHandler");
const methodNotAllowedHandler = require("./utils/methodNotAllowedHandler");
const cors = require("./config/corsConfig");

app.use(requestLogger);
app.use(cors);
app.use(express.json());

app.use("/api", myRoutes);

app.use(methodNotAllowedHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.warn(`🌍 Environment: ${NODE_ENV}`);
  console.warn(`🚀 Server is running at 👉 http://localhost:${PORT}/`);
});
