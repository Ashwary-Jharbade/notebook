const express = require("express");
const envConstants = require("../config/index");

const server = () => {
  const app = express();
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const PORT = envConstants.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
  return app;
};

module.exports = server;
