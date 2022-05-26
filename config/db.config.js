import mongoose from "mongoose"
const url = ('mongodb://127.0.0.1:27017/TieSheet?readPreference=primary&&directConnection=true&ssl=false')
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection
con.on('connected',function(){

    console.log("database connected succesfully")
})

