const createRecord = async (model, payload) => {
  try {
    const recordInstance = new model(payload);
    const data = await recordInstance.save();
    return data;
  } catch (error) {
    throw error;
  }
};

const findRecord = async (model, query = {}) => {
  try {
    const data = await model.findOne(query);
    return data;
  } catch (error) {
    throw error;
  }
};

const findAllRecord = async (model, query = {}) => {
  try {
    const data = await model.find(query);
    return data;
  } catch (error) {
    throw error;
  }
};

const updateRecordByQuery = async (model, query, payload) => {
  try {
    const data = await model.findOneAndUpdate(
      query,
      { $set: payload },
      { new: true }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const pushAttributeInRecord = async (model, query, payload) => {
  try {
    const data = await model.findOneAndUpdate(
      query,
      { $push: payload },
      { new: true }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const removeSubDocsFromRecord = async (model, query, payload) => {
  try {
    const data = await model.findOneAndUpdate(query, { $pull: payload });
    return data;
  } catch (error) {
    throw error;
  }
};

const updateSubDocsInRecord = async (model, query, payload) => {
  try {
    const data = await model.findOneAndUpdate(query, payload);
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteRecord = async (model, query) => {
  try {
    const data = await model.deleteOne(query);
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRecord,
  updateRecordByQuery,
  deleteRecord,
  pushAttributeInRecord,
  findAllRecord,
  findRecord,
  removeSubDocsFromRecord,
  updateSubDocsInRecord,
};
