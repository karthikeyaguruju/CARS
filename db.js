const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://karthikeyaguruju:8wYgqLPBWem7Ol64@cluster0.oz96v82.mongodb.net/cars'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose