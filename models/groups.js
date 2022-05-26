import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
    name:{
        type:String

    }
})

const group =mongoose.model('group',groupSchema)

export default  group