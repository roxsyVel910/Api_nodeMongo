const multer = require("multer");

const storage = multer.diskStorage({
    destination:function(req, file, cb){ //CALLBACK cb funcion final de la logica
        const pathStorage = `${__dirname}/../storage`
        cb(null,pathStorage)
    },
    filename:function(req, file, cb){
        const ext = file.originalname.split(".").pop(); // ["name","png"]
        const filename= `file-${Date.now()}.${ext}` // file-156556565.png - Date format unix ej: 1599556565
        cb(null,filename)
    }
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware;