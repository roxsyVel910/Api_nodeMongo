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
const getItem = ( req, res) => {
    const { body } = req
    console.log(body)
    res.send({algo:1})
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
const updateItem = ( req, res) => {};

/**
 * borrar datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = ( req, res) => {};

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}