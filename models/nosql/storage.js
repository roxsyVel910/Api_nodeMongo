const fs = require('fs');
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

//GetAll
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};

//GetItem
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

//Create
const createItem = async (req, res) => {
  try {
    const { body, file } = req;
    console.log(file);

    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
};

//Delete
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.findById(id);

    await storageModel.delete({ _id: id }); //delete({_id: id}) (2.)  |  deleteOne(id)

    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`; //TODO C:/miproyecto/file-123.png

    //fs.unlinkSync(filePath); //Sí se comenta, se mantiene la persistencia (1.)
    const data = { filePath, deleted: 1 };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

module.exports = { getItems, getItem, createItem, deleteItem };