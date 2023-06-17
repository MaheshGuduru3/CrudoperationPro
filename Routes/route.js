/* ALL APIS ARE SETTING UP HERE */
const express = require('express')
const route = express.Router()
const results = require('../Model/schema')

route.post('/crud', async (req,res)=>{
    
    const { name , email} = req.body;
    if(name == " " || email == " "){
      res.status(201).json({d : "required input"})
    }
    else {  
    try{
      const re = await results.create({name,email})
      res.status(201).json({status:'success',data:re })
    }
    catch(err){
      res.status(400).json({err:"Already existed try another one please...."})
    }
 }
})

route.get('/posts', async (req,res)=>{
 try{
   const data = await results.find()
    res.status(201).json({data})
 }
 catch(err){
  res.status(400).json({err:err.message})
 }
})


route.get('/one/:name',async (req,res)=>{
   try{
      const re = await results.findOne({ name : req.params.name})
      if(re === null){
         res.json({message:"NOT FOUND"})
      }
      else{
         res.status(201).json({re,message:"FOUND"})   
      }      
   }
   catch(err){
      res.status(400).json({err:err.message})
   }
})

route.delete('/del/:name',async (req,res)=>{
  try{
      const data = await results.deleteOne({name:req.params.name})
      res.json({data})
   }
   catch(err){
      res.status(400).json({err:err.message})
  }
})


route.patch('/updated/:name',async (req,res)=>{
  try{
      const data = await results.updateOne({name:req.params.name},req.body)
      res.send({data})
   }
   catch(err){
      res.status(400).json({err:err.message})
  }
})

module.exports = route;