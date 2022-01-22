const User = require("./schema");
const { find, findAll, save, update } =
  require("../../utils/db/index").handlers;
const resuables = require("../../utils/resuables");
const { apiResponse, httpConstants } = resuables;
const {
  validateCreateUser,
  validateUserId,
  validateUpdateUser,
} = require("./validation");

const createUser = async (req, res) => {
  try {
    const body = req.body;
    validateCreateUser(body);
    const data = await save(User, body);
    const code = httpConstants.created;
    return res
      .status(code)
      .json(apiResponse(code, "User created successfully", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "User creation failed"));
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    validateUserId(query);
    const data = await find(User, query);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Found one user data", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "User not found"));
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await findAll(User, {});
    const code = httpConstants.success;
    return res.status(code).json(apiResponse(code, "Found user records", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res.status(code).json(apiResponse(code, "User records not found"));
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const query = { _id: id };
    validateUserId(query);
    validateUpdateUser(body);
    const data = await update(User, query, body);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "Updated user records", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "Unable to update user record"));
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id };
    validateUserId(query);
    const payload = { isActive: false };
    const data = await update(User, query, payload);
    const code = httpConstants.success;
    return res
      .status(code)
      .json(apiResponse(code, "User record removed", data));
  } catch (error) {
    const code = httpConstants.not_found;
    return res
      .status(code)
      .json(apiResponse(code, "Unable to remove user record"));
  }
};

module.exports = {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
};
