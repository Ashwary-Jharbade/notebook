const Joi = require("joi");
const { requestError } = require("../../utils/resuables");

const validateCreateUser = (payload) => {
  try {
    const schema = Joi.object({
      firstName: Joi.string().max(20).required(),
      lastName: Joi.string().max(20).required(),
      phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),
      email: Joi.string()
        .pattern(/^[a-z\d&=_'-+,<>.]+@[a-z]+.[a-z]+$/i)
        .required(),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
      userPrivilege: Joi.string().optional(),
      isActive: Joi.boolean().optional(),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateUpdateUser = (payload) => {
  try {
    const schema = Joi.object({
      firstName: Joi.string().max(20).optional(),
      lastName: Joi.string().max(20).optional(),
      phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .optional(),
      email: Joi.string()
        .pattern(/^[a-z\d&=_'-+,<>.]+@[a-z]+.[a-z]+$/i)
        .optional(),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateUserId = (payload) => {
  try {
    const schema = Joi.object({ _id: Joi.string().required() }).validate(
      payload
    );
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateUpdateUser,
  validateUserId,
  validateCreateUser,
};
