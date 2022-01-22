const Express = require("express");
const {
  createNote,
  updateNote,
  deleteNote,
  getNote,
  getAllNote,
} = require("./controller");

const router = Express.Router();
router.post("/createNote", createNote);
router.put("/updateNote/:id", updateNote);
router.delete("/removeNote/:id", deleteNote);
router.get("/findNote/:id", getNote);
router.get("/findNotes", getAllNote);

module.exports = router;
