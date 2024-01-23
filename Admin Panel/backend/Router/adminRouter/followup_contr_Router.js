const express = require('express')
const { ApiResponse } = require('../../Response/apiResponse')
const errorHendlar = require('../../utils/errorHendler')
const folloupModel = require('../../models/folloupModel')
const folloup_controll_Router = express.Router()


// all teams data
folloup_controll_Router.get("/",async (req,res)=>{
    let id = req.data._id
    try {
        let resData = await folloupModel.find({team_creater:id,isActive:true})
        if(resData){
            res.json(new ApiResponse(true,resData,"success"))
        }
    } catch (error) {
        let err = errorHendlar(error)
		res.json(new ApiResponse(false,null, err ? err : error.message))
    }
})

// add new team
folloup_controll_Router.post('/newteam/',async(req,res)=>{
    const {team_name,team_discription,slug} = req.body
    try {
        const resData = await folloupModel.create({
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
folloup_controll_Router.delete("/delete/:id",async(req,res)=>{
     const id = req.params.id
     try {
        const delData = await folloupModel.findOneAndUpdate({id,isActive:false}).populate("team_creater","-password -isActive -isAccessToApplication -__v")
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
folloup_controll_Router.put('/add_team_member/:slug/:id',async (req,res)=>{

})

// delete single member to team
folloup_controll_Router.put('/delete/:slug/:id',async (req,res)=>{

})

// add many members to team (data in req.body)
folloup_controll_Router.put('/add_many_member/:slug/',async (req,res)=>{

})

// add many leads to team (data in req body)
folloup_controll_Router.put('/add_customers/:slug/',async (req,res)=>{

})

// find perticulur team 
folloup_controll_Router.get('/:slug',async (req,res)=>{
    
})

// make team admin 
folloup_controll_Router.get('/make_team_admin/:slug/:id',async (req,res)=>{
    
})

// adit team deatils
folloup_controll_Router.post('/edit/:slug/',async (req,res)=>{
    
})



module.exports = teamRouter;