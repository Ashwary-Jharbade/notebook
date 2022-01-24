const server = require("./utils/app")();
const dbInit = require("./utils/db/index").dbInit;
const api = require("./api");
dbInit();
api(server);
