const { json } = require("express")
const Contact= require("../models/contact")
const router = require("express").Router()




router.post("/createContact", async (req,res)=>{

try {
    const {name, age, favoriteFoods }=req.body

    const contact= await Contact.create({ name, age, favoriteFoods})
res.status(200).json({status:true, mes:"Contact has benn Created",date:})

contact

} catch (error) {
    console.log(error)
    res.status(500).json({status: false, meg: error})
}


})
router.get("/contactList", async (req,res)=>{
    try {
     const contactList = Contact.find({})   
      res.status(200).json({status:true, msg:"Contact List" ,data:contactList})  
    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, mes:error})
    }
})
router.delete("/deleteContact/:id", async (req,res)=>{
try {
    const {id}= req.params
    let contact = await contact.findById(id)
    if (contact){
     await contact.findByIdAndDelete(id)
     res.status(200).json({status:true, mes: "Contact has been deleted"})
    }else{
        res.status(200).json({status:false, mes:"Contact in not found"})
    }
} catch (error) {
    console.log(error)
    res.status(500).json({status:false, mes:error})
}

})
router.put("/upsateContact:id", async(req,res)=>{
  try {
   let {id}=req.params
   const contact = await Contact.findById(id)
   if(contact){
    Contact.findByIdAndUpdate(id, ...req.body)
    res.status(200).json({status:true , msg:" Contact has been uddated", date:contact})

   }else{
    res.status(200).json({status: false, meg:" Contact in not found"})
   }
    
  } catch (error) {
    console.log(error)
    res.status(500).json({status:false, msg:error})
  }
    

})









module.exports=router