const details = {};

details.FirstName = (requestProperties) => {
  return typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
    ? requestProperties.body.firstName.trim()
    : false;
};

details.LastName = (requestProperties) => {
  return typeof requestProperties.body.lastName === "string" &&
  requestProperties.body.lastName.trim().length > 0
    ? requestProperties.body.lastName.trim()
    : false;
};

details.Password = (requestProperties) => {
  return typeof requestProperties.body.password === "string" &&
  requestProperties.body.password.trim().length > 0
    ? requestProperties.body.password.trim()
    : false;
};

details.Phone = (requestProperties) => {
  return typeof requestProperties.body.phone === "string" &&
  requestProperties.body.phone.trim().length === 11
    ? requestProperties.body.phone.trim()
    : false;
};

details.TosAgreement = (requestProperties) => {
    return typeof requestProperties.body.tosAgreement === "boolean" &&
    requestProperties.body.tosAgreement === true
      ? true
      : false;
  };

module.exports = details;
