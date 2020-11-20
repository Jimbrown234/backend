const dbLayer = require('../model/employee')

let service = {}

service.getData = async() =>{
    let data = await dbLayer.getData();
    return data;
}

module.exports = service;