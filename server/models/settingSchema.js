const mongoose = require("mongoose")

const settingSchema = mongoose.Schema({
    image: {
        image: Buffer,
        contentType: String,
        name:String
    }
    ,
    num:{
        type:String,
        required:true
    }
})
const settingModel = mongoose.model("Setting", settingSchema)
module.exports = settingModel