import mongoose from "mongoose";

const fixtureSchema = new mongoose.Schema({
  team1:{
    type:mongoose.Types.ObjectId,
    ref:'Teams'
  },
team2:{
    type:mongoose.Types.ObjectId,
    ref:'Teams'

  },
    score:{
        type:String,
        
       
        
    },
    events:{
        type:[String]
    },
    status:{
        type:String,
        enum:['Not started','Live','Finished'],
        default:'Not started'
    },
    minutes:{
        type:String
        
    },

})

const Fixture =mongoose.model('Fixture',fixtureSchema)

export default  Fixture