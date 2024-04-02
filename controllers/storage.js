const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

//GetAll
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await tracksModel.findAllData({}); //find
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};

//GetItem
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const data = await tracksModel.findOneData(id); //findById
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

//Create
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');
  }
};

//Update
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEMS');
  }
};

//Delete
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const data = await tracksModel.delete({ _id: id }); //deleteOne (borra el dato)
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_DELETE_ITEM');
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };