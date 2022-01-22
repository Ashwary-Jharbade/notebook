const dbHandlers = require("./dbHandler");

const save = (model, data) => {
  try {
    return dbHandlers.createRecord(model, data);
  } catch (error) {
    throw error;
  }
};

const find = (model, query) => {
  try {
    return dbHandlers.findRecord(model, query);
  } catch (error) {
    throw error;
  }
};

const findAll = (mode, query) => {
  try {
    return dbHandlers.findAllRecord(mode, query);
  } catch (error) {
    throw error;
  }
};

const update = (model, query, data) => {
  try {
    return dbHandlers.updateRecordByQuery(model, query, data);
  } catch (error) {
    throw error;
  }
};

const push = (model, query, data) => {
  try {
    return dbHandlers.pushAttributeInRecord(model, query, data);
  } catch (error) {
    throw error;
  }
};

const remove = (model, query) => {
  try {
    return dbHandlers.deleteRecord(model, query);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  save,
  remove,
  update,
  find,
  findAll,
  push,
};
