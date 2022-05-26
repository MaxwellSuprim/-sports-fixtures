
import TieSheet from "../models/tieSheet.js"

export const gTieSheet = async (req, res, next) => {

    try {

        const teams = req.body.teams
        let len = teams.length
        let len2 = len - 1
        //console.log(len)


        const shuffledArray = teams.sort((a, b) => 0.25 - Math.random());
        console.log("shuffledArray",shuffledArray)
        let readySheet = []

        for (let i = 0; i < (len) / 2; i++) {
            //console.log(shuffledArray[i], "  vs  ", shuffledArray[len2 - i])

            readySheet[i] = `${shuffledArray[i]}   vs   ${shuffledArray[len2 - i]}`//dollar curly bracket and tilde

        }

        console.log("readyshhet",readySheet)
       // const mew = ['byn vs juventus','city vs united']
        
        
    const cat =await new TieSheet({tiesheet1:readySheet}).save()
        res.status(200).json(cat)
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}


export const getTieSheet=async(req,res,next)=>{

    try {
       // let data = req.body.event
        TieSheet.find()
        .then((success)=>{
            res.json(success)
        })
        .catch((err)=>{
            next({error})
        })
        
    } catch (error) {
        next({error})
    }
}
    