import Teams from "../models/Teams.js"

export const postTeams = async (req, res, next) => {

    try {

        const teams = req.body.teams

        const shuffledArray = teams.sort((a, b) => 0.25 - Math.random());
        console.log("shuffledArray", shuffledArray)
        let readySheet = shuffledArray.slice(0, 8)
        console.log(readySheet)

        let dbteams = []

        for (let i = 0; i < readySheet.length;i++) {
            let team = await new Teams({ teamname: readySheet[i] })
            dbteams.push(team)
        }
        await Teams.bulkSave(dbteams)
        res.status(200).json("done")
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}


export const getTeams = async (req, res, next) => {

    try {
        // let data = req.body.event
        Teams.find()
        .populate("group","-_id")
            .then((success) => {
                res.json(success)
            })
            .catch((err) => {
                next({ error })
            })

    } catch (error) {
        next({ error })
    }
}

export const updateTeam=async(req,res,next)=>{

  try {
      let {id}=req.params

      let team =await Teams.findByIdAndUpdate(id,{group:req.body.groupid})
        res.json("successfully group updated")
  } catch (error) {
      console.log(error)
      next(error)
      
  }


}


export const getGroup ={
    
}