const Express = require("express");
const {
  createNoteBook,
  updateNoteBook,
  deleteNoteBook,
  getNoteBook,
  getAllNoteBook,
  addNoteInNoteBook,
  removeNoteFromNoteBook,
  updateNoteBookAccess,
} = require("./controller");

const router = Express.Router();
router.post("/createNoteBook", createNoteBook);
router.put("/updateNoteBook/:id", updateNoteBook);
router.delete("/removeNoteBook/:id", deleteNoteBook);
router.get("/findNoteBook/:id", getNoteBook);
router.get("/findNoteBooks", getAllNoteBook);
router.put("/addNote/:id", addNoteInNoteBook);
router.put("/removeNote/:id", removeNoteFromNoteBook);
router.put("/notebookAccess/:id", updateNoteBookAccess);

module.exports = router;
