require("dotenv").config();

const envConstants = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
};

module.exports = envConstants;
