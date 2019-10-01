const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({

    sid:{
        type:String
    },
    companyName:{
        type:String,
        required:true
    },
    siteName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    regNo:{
        type:Number,
        required:true
    },
    cNo:{
        type:Number,
        required:true
    },
    cPerson:{
        type:String,
        required:true
    }
    // status:{
    //     type:Number,
    //     required:true
    // }
});

module.exports = mongoose.model('suppliers', supplierSchema);