const Express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("./controller");

const router = Express.Router();
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/removeUser/:id", deleteUser);
router.get("/findUser/:id", getUser);
router.get("/findUsers", getAllUser);

module.exports = router;
