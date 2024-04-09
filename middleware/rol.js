const { handleHttpError } = require('../utils/handleError');

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    console.log({ user });
    const rolesByUser = user.role; //TODO ["user"]
    //TODO: ["admin"]
    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    ); //TODO: true | false

    if (!checkValueRol) {
      handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);
      return;
    }

    next();
  } catch (error) {
    handleHttpError(res, 'ERROR_PERMISSIONS', 403);
  }
};

module.exports = checkRol;