const Express = require("express");
const {
  createNoteBook,
  updateNoteBook,
  deleteNoteBook,
  getNoteBook,
  getAllNoteBook,
} = require("./controller");

const router = Express.Router();
router.post("/createNoteBook", createNoteBook);
router.put("/updateNoteBook/:id", updateNoteBook);
router.delete("/removeNoteBook/:id", deleteNoteBook);
router.get("/findNoteBook/:id", getNoteBook);
router.get("/findNoteBooks", getAllNoteBook);

module.exports = router;
