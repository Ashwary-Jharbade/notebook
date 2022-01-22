const NoteBook = require("./schema");
const { find, findAll, save, update } =
  require("../../utils/db/index").handlers;
const resuables = require("../../utils/resuables");
const { apiResponse, httpConstants } = resuables;
const {
  validateCreateNoteBook,
  validateUpdateNoteBook,
  validateNoteBookId,
} = require("./validation");

const createNoteBook = async (req, res) => {
  try {
    const body = req.body;
    const data = await save(NoteBook, body);
    validateCreateNoteBook(body);
    const code = httpConstants.created;
    return res
      .status(code)
      .json(apiResponse(code, "NoteBook created successfully", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "NoteBook creation failed"));
  }
};

const getNoteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    validateNoteBookId(query);
    const data = await find(NoteBook, query);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Found one notebook data", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "NoteBook not found"));
  }
};

const getAllNoteBook = async (req, res) => {
  try {
    const data = await findAll(NoteBook, {});
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Found notebook records", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "NoteBook records not found"));
  }
};

const updateNoteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const query = { _id: id };
    validateNoteBookId(query);
    validateUpdateNoteBook(body);
    const data = await update(NoteBook, query, body);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Updated notebook records", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "Unable to update notebook record"));
  }
};

const deleteNoteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    validateNoteBookId(query);
    const payload = { isActive: false };
    const data = await update(NoteBook, query, payload);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "NoteBook record removed", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "Unable to remove notebook record"));
  }
};

module.exports = {
  createNoteBook,
  deleteNoteBook,
  getAllNoteBook,
  getNoteBook,
  updateNoteBook,
};
