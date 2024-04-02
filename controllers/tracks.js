const { matchedData } = require('express-validator');
const  { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

/**
 * obtener lista 
 * @param {*} req
 * @param {*} res
 * */

const getItems = async (req, res) => {
    try {
       
        const data = await tracksModel.find({});
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
    
};
const getItem = async( req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({ data });
    } catch(e){
        handleHttpError(res, "ERROR_GET_ITEMS")
    }
    
};

/**
 * insertar datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async ( req, res) => {
    
    try {
        const body = matchedData(req);

        const data = await tracksModel.create(body);
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
    

};

/**
 * actualizar datos
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * borrar datos
 * @param {*} req 
 * @param {*} res 
 */
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

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}