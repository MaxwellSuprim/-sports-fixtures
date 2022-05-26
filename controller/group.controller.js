import express from "express";

import group from "../models/groups.js";
import Teams from "../models/Teams.js";
import Fixture from "../models/fixtures.js";

export const createGroup = async (req, res, next) => {

    try {
        let data = ["A", "B"]
        let dbgrp = []

        for (let i = 0; i < data.length; i++) {

            let grp = await new group({ name: data[i] })

            dbgrp.push(grp)


        }
        await group.bulkSave(dbgrp)
        console.log(dbgrp)
        res.status(200).json("groups created")

    } catch (error) {
        console.log("error", error)
        next(error)

    }


}


export const getGroup = async (req, res, next) => {
    // let groupname = req.params.name

    // let Grp = await group.findOne({ name: groupname })
    // console.log(Grp._id)

    // let teams = await Teams.find({group:Grp._id})


    console.log(req.params.name)
    let teams = await Teams.aggregate([
        {
            $lookup: {
                localField: 'group',
                foreignField: '_id',
                from: 'groups',
                as: 'groupby'
            }

        }, {
            $match: {
                'groupby.name': req.params.name
            }
        }



    ])
    console.log(teams)
    res.status(200).json(teams)

}


export const createfixture = async (req, res, next) => {
    let gname = ["A", "B"]
    //let groupnameA =req.params.nam
    for (let i = 0; i < 2; i++) {
        let groupnameA = gname[i]

        let Grp = await group.findOne({ name: groupnameA })
        //console.log("groupid",Grp._id)

        let teams = await Teams.find({ group: Grp._id })
        let groupA = []

        for (let i = 0; i < teams.length; i++) {
            groupA.push(teams[i]._id)
        }

        let dbgroup1 = [groupA[1],groupA[2]]
        let dbgroup2 = [groupA[3],groupA[0]]
        let dbgroup3 = [groupA[1],groupA[3]]
        let dbgroup4 = [groupA[2],groupA[0]]
        let dbgroup5 = [groupA[1],groupA[0]]
        let dbgroup6 = [groupA[2],groupA[3]]
        
        
        

        let fix1 = [dbgroup1, dbgroup2, dbgroup3, dbgroup4, dbgroup5, dbgroup6]
            console.log(fix1[0][0])
        let pushfixture = []
        for (let j = 0; j < fix1.length; j++) {


            let fixtures = await new Fixture({ team1: fix1[i][0],team2:fix1[i][1] })
            pushfixture.push(fixtures)

        }


        console.log(pushfixture)
        Fixture.bulkSave(pushfixture)
    }
   
    res.status(200).json("successfully created fixtures")




}


export const getfixture =async(req,res,next)=>{
    try {
        // let data = req.body.event
          Fixture.find()
        .populate('team1','-_id')
        .populate('team2','teamname')
        
    
            .then((success) => {
                console.log(success)
                res.json(success)
            })
            .catch((err) => {
                next({ error })
            })

    } catch (error) {
        next({ error })
    }
}

 export const updatefixture=async(req,res,next)=>{

   try {
    let id =req.params.id
    if(id){
  const{score,events,status,minutes}=req.body
     let update =await Fixture.findByIdAndUpdate(id,{score:score,events:events,status:status,minutes:minutes})
    .populate('team1','teamname')
    .populate('team2','teamname')
    
     console.log(update)
    res.status(200).json(update)
   } 
   }
   catch (error) {
       next(error)
       
   }

    
}

