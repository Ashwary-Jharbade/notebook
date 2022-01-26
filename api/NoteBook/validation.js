const Joi = require("joi");
const { requestError } = require("../../utils/resuables");

const validateCreateNoteBook = (payload) => {
  try {
    const schema = Joi.object({
      title: Joi.string().max(50).required(),
      userId: Joi.string().required(),
      location: Joi.object({
        coordinates: Joi.array().items(Joi.number(), Joi.number()),
      }).optional(),
      category: Joi.string().optional(),
      thumbnails: Joi.array()
        .items(
          Joi.object({
            path: Joi.string().required(),
            createdAt: Joi.date().required(),
            updatedAt: Joi.date().required(),
            deviceType: Joi.string().required(),
          }).optional()
        )
        .optional(),
      isPrivate: Joi.boolean().optional(),
      contributors: Joi.array()
        .items(
          Joi.object({
            userId: Joi.string().required(),
            userAccess: Joi.string().optional(),
          })
        )
        .optional(),
      notes: Joi.array()
        .items(
          Joi.object({
            noteId: Joi.string().required(),
          })
        )
        .optional(),
      tags: Joi.array().items(Joi.string()).optional(),
      isActive: Joi.boolean().optional(),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateUpdateNoteBook = (payload) => {
  try {
    const schema = Joi.object({
      title: Joi.string().max(50).optional(),
      category: Joi.string().optional(),
      isPrivate: Joi.boolean().optional(),
      tags: Joi.array.items(Joi.string()).optional(),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateNoteBookId = (payload) => {
  try {
    const schema = Joi.object({ _id: Joi.string().required() }).validate(
      payload
    );
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateNoteId = (payload) => {
  try {
    const schema = Joi.object({ noteId: Joi.string().required() }).validate(
      payload
    );
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateNoteBookAccess = (payload) => {
  try {
    const schema = Joi.object({
      userId: Joi.string().required(),
      userAccess: Joi.string().required(),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateUpdateNoteBook,
  validateNoteBookId,
  validateCreateNoteBook,
  validateNoteId,
  validateNoteBookAccess,
};
