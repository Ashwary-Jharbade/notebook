const resuables = require("../utils/resuables");
const { UserRouter } = require("./User");
const { NoteRouter } = require("./Note");
const { NoteBookRouter } = require("./NoteBook");
const { apiResponse, httpConstants } = resuables;

const api = (server) => {
  server.get("/", (req, res) => {
    const code = httpConstants.success;
    res.status(code).json(apiResponse(code, "Successful"));
  });
  server.use("/user", UserRouter);
  server.use("/note", NoteRouter);
  server.use("/notebook", NoteBookRouter);
  server.all("*", (req, res) => {
    const code = httpConstants.bad_request;
    res.status(code).json(apiResponse(code, "Resource does not exists"));
  });
};

module.exports = api;
