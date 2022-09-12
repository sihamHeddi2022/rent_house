const mongoose = require("mongoose")
const schema = mongoose.Schema

const House = new schema({
    adress:{
        street:{
            type:String,
            required:true
        }
    }
})
