const mongoose = require("mongoose")


const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true, // CreatedAt, UpdatedAt
        versionKey:false
    }
);

module.exports = mongoose.model("storages",StorageScheme) //NOMBRE DE LA COLECCION DEL MODELO