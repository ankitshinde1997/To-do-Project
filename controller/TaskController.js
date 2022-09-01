const mongoose = require("mongoose")
const imageSchema=require('../model/imageSchema')
const taskSchema=require('../model/task_schema')
const category_schema=require('../model/categoriesSchema')


exports.image= async(req,res)=> {
    try {
        
   const result = await imageSchema.create({
    image:req.body.image
   })

   res.status(200).json({message:"icon is added",data:result})

    } catch (error) {

        res.status(400).json({status:"failed",message:"please provide vallid data "})
        
    }
}

exports.task_category=async(req,res)=>{
    try {
        
     const result=await category_schema.create({
        type:req.body.category
     })

     res.status(200).json({message:"task category is inserted",data:result})
    } catch (error) {
        res.status(400).json({status:"failed",message:"please provide vallid data"})
    }
}


exports.task_insert= async(req,res)=>{
    try {

        const result=await taskSchema.create({
            categorie_id:req.body.category_id,
            what_i_have:req.body.what_i_have,
            Where:req.body.where,
            when:req.body.when,
            radio_type:req.body.type

        })
        res.status(200).json({message:"task  is inserted",data:result})
    } catch (error) {
        res.status(400).json({status:"failed",message:"please provide vallid data"})
        
    }
}

exports.show_task=async(req,res)=>{
    try {
        
  const result= taskSchema.find({})
  res.status(200).json({message:"task  is inserted",data:result})

    } catch (error) {
        res.status(400).json({status:"failed",message:"please provide vallid data"})
    }
}