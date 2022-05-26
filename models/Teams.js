import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema({
    teamname:{
        type:String
    },
    group:{
        type:mongoose.Types.ObjectId,
        ref:"group"

    }
})

const Teams =mongoose.model('Teams',teamsSchema)

export default Teams