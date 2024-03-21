const { validatorResult } = require('express-validator');


    const validatorResults = (req, res, next)=>{
       try {
        validatorResult(req).throw();
        return next();
       } catch (error) {
         res.status(403);
         res.json({error: error.array()})
       }
    }

     module.exports = validatorResults
    
