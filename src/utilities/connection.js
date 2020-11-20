const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/company";

const empDetailsSchema = Schema({
    empid: String,
    empname: String,
    emailid: String,
    password:{type:Number},
    mobno:{type:Number},
    designation:{type:String},
    location:{type:String}
}, { collection: "empt" })

const flightSchema = Schema({
    routeId: { type: String, unique: true },
    origin: String,
    destination: String,
    flightIds: { type: [String], default: [] },
    flightTimings: { type: [String], default: [] },
    prices: { type: [String], default: [] }
}, { collection: "Flight" })

let collection = {};

collection.getBookingCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('empt', empDetailsSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getFlightCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Flight', flightSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;