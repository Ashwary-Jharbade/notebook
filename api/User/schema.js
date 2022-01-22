const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    userPrivilege: {
      type: String,
      enum: ["admin", "staff", "client"],
      default: "client",
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamp: true,
  }
);

const User = Mongoose.model("user", schema);
module.exports = User;
