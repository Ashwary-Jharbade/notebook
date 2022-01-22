const Mongoose = require("mongoose");
const envConstants = require("../config/index");

const dbInit = () => {
  const { DB_URI, DB_NAME } = envConstants;
  const URI = DB_URI + DB_NAME;
  Mongoose.connect(URI, (err) => {
    if (err) {
      process.exit(0);
    }
    console.log("DB Started");
  });
};

module.exports = dbInit;
