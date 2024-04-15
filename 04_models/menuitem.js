const mongoose = require("mongoose")

// define the schema

const menuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique :true
    },
    price : {
        type : Number ,
        required : true
    },
    taste : {
        type : String ,
        enum : ["sweet","sour","spicy"]
    },
    is_drink : {
        type : Boolean,
        default :false 
    },
    ingredients : {
        type : [String],
        default : []
    },
    num_sales : {
        type : Number ,
        default: 0,
    }
})


const MenuItem  = mongoose.model("MenuItem",menuItemSchema)

module.exports=MenuItem