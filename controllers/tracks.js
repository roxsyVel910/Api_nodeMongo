const  { tracksModel } = require('../models')

/**
 * obtener lista 
 * @param {*} req
 * @param {*} res
 * */

const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({ data })
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
    const { body } = req
    console.log(body)
   const data = await tracksModel.create(body)
    res.send({data})

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