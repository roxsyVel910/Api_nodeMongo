const  { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * obtener lista 
 * @param {*} req
 * @param {*} res
 * */

const getItems = async (req, res) => {
    const data = await storageModel.find({});
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
    const { body,file } = req
    
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    if(data){
        res.send({data})
    }
 
    res.send({file})

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