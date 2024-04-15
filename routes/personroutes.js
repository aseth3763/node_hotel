const express = require("express");
const router = express.Router();
const Person = require("./../04_models/person")


//POST router to add a person
router.post("/" , async (req,res)=> {
    try {
  
      const data = req.body  //assuming the request body contains the person data
    
    //creating a new Person document using the mongoose model
    const newPerson =  new Person(data)
  
    //save the new person to the database
    const response= await  newPerson.save()
    console.log("data saved");
    res.status(200).json(response)
  
    }catch(err) {
      console.log(err);
      res.status(500).json({error:"Internal server error"})
    }
  
  
  })
  
  
  //get method to get the data of person
  router.get("/",async(req,res)=>{
    try {
      const data = await Person.find();
      console.log("data fetched");
      res.status(200).json(data)
    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal error"})
    }
  
  })

  router.get("/:workType", async (req,res) =>{
    try{
      const workType = req.params.workType ; // Extract the work type from the URL parameter
      if(workType=="chef"|| workType == "waiter" || workType=="manager"){
        const response = await Person.find({work:workType});
        console.log("response fetched");
        res.status(200).json(response)
      }else{
        res.status(404).json({error : "Invalid work type"})
      }
      }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
      }
   
  
    }
  )



  router.put("/:id",async (req,res)=>{
    try{
      const personId = req.params.id  //Extract the work type from the URL parameter
      console.log(personId);
      const updatePersonData = req.body // Update data for the person
      console.log(updatePersonData);

      const response = await Person.findByIdAndUpdate(personId,updatePersonData ,{
        new:true , // Return the updated document
        runValidators:true
      });
      if (!response){
        console.log("Person not found");
         return res.status(404).json({error:"Person not found"})
}   

  console.log("data updated");
  res.status(200).json(response);


    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"})
    }
  })


  router.delete("/:id",async(req,res)=>{
    try{
      const personId = req.params.id; //Extract the work type from the URL parameter
    
        const response = await Person.findByIdAndDelete(personId);

      if (!response) {
        return res.status(200).json({message:"Person deleted successfully"})
      }


    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"})
    }

  })


module.exports = router