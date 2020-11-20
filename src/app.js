const express = require('express')
const router = require('./routes/employeeRouter')
const app =express()
const cors = require('cors')
const morgan = require('morgan')
// const service = require('./service/employee');

// service.getData()

app.use(cors);
app.use(morgan('tiny'))
app.use('/',router)
// app.get('/check',async (req,res,next)=>{
//     res.send("Welcome")
// })


app.listen(2345)

console.log("Server started")