const Note = require("./schema");
const { find, findAll, save, update } =
  require("../../utils/db/index").handlers;
const resuables = require("../../utils/resuables");
const { apiResponse, httpConstants } = resuables;
const {
  validateCreateNote,
  validateNoteId,
  validateUpdateNote,
} = require("./validation");

const createNote = async (req, res) => {
  try {
    const body = req.body;
    validateCreateNote(body);
    const data = await save(Note, body);
    const code = httpConstants.created;
    return res
      .status(code)
      .json(apiResponse(code, "Note created successfully", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "Note creation failed"));
  }
};

const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    validateNoteId(query);
    const data = await find(Note, query);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Found one note data", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "Note not found"));
  }
};

const getAllNote = async (req, res) => {
  try {
    const data = await findAll(Note, {});
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Found all note records", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "Note records not found"));
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const query = { _id: id };
    validateNoteId(query);
    validateUpdateNote(body);
    const data = await update(Note, query, body);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Updated note records", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "Unable to update note record"));
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    validateNoteId(query);
    const payload = { isActive: false };
    const data = await update(Note, query, payload);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Note record removed", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "Unable to remove note record"));
  }
};

module.exports = {
  createNote,
  deleteNote,
  getAllNote,
  getNote,
  updateNote,
};
