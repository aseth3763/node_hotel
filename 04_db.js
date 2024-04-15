const mongoose = require("mongoose")

//define the mongodb connection url
const mongoURL =  'mongodb://localhost:27017/hotels' //here hotels is the name of database

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,   //this is used to handle depracation warning
    useUnifiedTopology: true //and ensure conmpatibility with the mongodb server.
})

// get the default connection 
// mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//define event listeners for database connection

db.on("connected",()=>{
    console.log("Connected to mongodB server");
})

db.on("error",()=>{
    console.log("Mongodb connection error :",err);
})

db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
})


//Export the database connection

module.exports=db