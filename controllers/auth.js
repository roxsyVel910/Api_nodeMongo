const { matchedData } = require('express-validator');
const { usersModel } = require('../models');
const { tokenSign } = require('../utils/handleJwt');
const { encrypt, compare } = require('../utils/handlePassword');
const { handleHttpError } = require('../utils/handleError');

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };

    const dataUser = await usersModel.create(body);
    dataUser.set('password', undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER');
  }
};

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ where: { email: req.email } }); //{ where: { email: req.email } }
    //.select('password name role email'); //nosql ***
    if (!user) {
      handleHttpError(res, 'USER_NOT_EXISTS', 404);
      return;
    }

    const hashPassword = user.get('password');

    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, 'PASSWORD_INVALID', 401);
      return;
    }

    user.set('password', undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_LOGIN_USER');
  }
};

module.exports = { registerCtrl, loginCtrl };