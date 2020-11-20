const connection = require('../utilities/connection')

let model = {}

model.getData = async()=>{
    collection = await connection.getBookingCollection();
    let response = await collection.find();
    if(response && response.length>0){
        console.log(response)
        return response
    }else{
        throw new Error("Connection failed")
    }
}

module.exports = model;