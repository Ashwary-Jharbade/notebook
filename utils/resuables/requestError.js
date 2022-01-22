const requestError = (schema) => {
  if (schema.error) throw "Request data received form client is not acceptable";
};
module.exports = requestError;
