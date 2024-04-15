const express = require("express")
const router = express.Router()
const MenuItem = require("./../04_models/menuitem")


router.post("/",async (req,res)=>{
    try{
      const data = req.body
      const newMenu = new MenuItem(data)
      const response = await newMenu.save();
      console.log("data saved");
      res.status(200).json(response)
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal error"})
    }
  })
  
  router.get("/",async (req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log("Data fetcheddd");
      res.status(200).json(data)
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal error"})
    }
  })
  
  router.get("/:speciesType",async(req,res)=>{
    try{
        const speciesType = req.params.speciesType
        if(speciesType=="sweet" || speciesType=="sour" || speciesType=="spicy"){
            const response = await MenuItem.find({taste:speciesType})
            res.status(200).json(response)
        }else{
            res.status(404).json({error:"Invalid species Type" })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})

    }
  })

  module.exports= router