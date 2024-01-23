const express = require('express')
const teamModel = require('../../models/teammodel')
const { ApiResponse } = require('../../Response/apiResponse')
const errorHendlar = require('../../utils/errorHendler')
const teamRouter = express.Router()


// all teams data
teamRouter.get("/",async (req,res)=>{
    let id = req.data._id
    try {
        let resData = await teamModel.find({team_creater:id,isActive:true})
        if(resData){
            res.json(new ApiResponse(true,resData,"success"))
        }
    } catch (error) {
        let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
    }
})

// add new team
teamRouter.post('/newteam/',async(req,res)=>{
    const {team_name,team_discription,slug} = req.body
    try {
        const resData = await teamModel.create({
            team_name,
            team_discription,
            slug,
            team_creater : req.data._id
       })
        if(resData!==null){
            let teamObj = resData.toObject()
           delete teamObj.__v
          res.json(new ApiResponse(true,teamObj,"team is created successfully"))
          }else{
            res.json("password is not match")
          }
        
    } catch (error) {
        let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
    }
})

// delete team 
teamRouter.delete("/delete/:id",async(req,res)=>{
     const id = req.params.id
     try {
        const delData = await teamModel.findOneAndUpdate({id,isActive:false}).populate("team_creater","-password -isActive -isAccessToApplication -__v")
        if(delData!==null){
            res.json(new ApiResponse(true,delData,`${delData.team_name} team is deleted successfully`))
        }else{
            res.status(404).json(new ApiResponse(false,null,"could not find"))
        }
     } catch (error) {
        let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
     }
})

// add single member to team
teamRouter.put('/add_team_member/:slug/:id',async (req,res)=>{

})

// delete single member to team
teamRouter.put('/delete/:slug/:id',async (req,res)=>{

})

// add many members to team (data in req.body)
teamRouter.put('/add_many_member/:slug/',async (req,res)=>{

})

// add many leads to team (data in req body)
teamRouter.put('/add_customers/:slug/',async (req,res)=>{

})

// find perticulur team 
teamRouter.get('/:slug',async (req,res)=>{
    
})

// make team admin 
teamRouter.get('/make_team_admin/:slug/:id',async (req,res)=>{
    
})

// adit team deatils
teamRouter.post('/edit/:slug/',async (req,res)=>{
    
})



module.exports = teamRouter;