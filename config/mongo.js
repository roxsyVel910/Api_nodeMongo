

const mongoose = require("mongoose"); 
const dbConnect = () => {
    //declaramos una arrow functions vacia
    const DB_URI = process.env.DB_URI;
    mongoose
        .connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },).then((res) => {
            console.log("** CONEXION CORRECTA ****");
        }).catch((error) => {
            console.log("** ERROR DE CONEXION ****");
        });
};
module.exports = dbConnect; 