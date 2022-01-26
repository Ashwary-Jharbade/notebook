const Joi = require("joi");
const { requestError } = require("../../utils/resuables");

const validateCreateNote = (payload) => {
  try {
    const schema = Joi.object({
      title: Joi.string().max(50).required(),
      userId: Joi.string().required(),
      tags: Joi.array().items(Joi.string()).optional(),
      location: Joi.object({
        coordinates: Joi.array().items(Joi.number(), Joi.number()),
      }).optional(),
      content: Joi.string().optional(),
      category: Joi.string().optional(),
      noteBookId: Joi.string().optional(),
      contributors: Joi.array()
        .items(
          Joi.object({
            userId: Joi.string().required(),
            userAccess: Joi.string().optional(),
          })
        )
        .optional(),
      thumbnails: Joi.array()
        .items(
          Joi.object({
            path: Joi.string().required(),
            createdAt: Joi.date().required(),
            updatedAt: Joi.date().required(),
            deviceType: Joi.string().required(),
          })
        )
        .optional(),
      isPrivate: Joi.boolean().optional(),
      isActive: Joi.boolean().optional(),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateUpdateNote = (payload) => {
  try {
    const schema = Joi.object({
      title: Joi.string().max(50).optional(),
      content: Joi.string().optional(),
      category: Joi.string().optional(),
      isPrivate: Joi.boolean().optional(),
      tags: Joi.array.items(Joi.string()),
    }).validate(payload);
    requestError(schema);
  } catch (error) {
    throw error;
  }
};

const validateNoteId = (payload) => {
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
  validateUpdateNote,
  validateNoteId,
  validateCreateNote,
};
