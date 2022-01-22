const apiResponse = (status, message, data = [], err = null) => {
  const response = {
    meta: {
      status,
      message,
    },
  };
  if (err) {
    response["error"] = err;
    return response;
  }
  response["data"] = data;
  return response;
};

module.exports = apiResponse;
