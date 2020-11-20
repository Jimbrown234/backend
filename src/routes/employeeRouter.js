const express = require('express');
const router = express.Router();

const service = require('../service/employee');

router.get('/getAll',async(req,res,next)=>{
    try {
        let data = service.getData();
        if(data){
            res.status =200;
            res.json(data);
        }
    } catch (error) {
        next(error)
    }
})

module.exports =router;