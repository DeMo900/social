//express&modules
const express = require("express")
const router = express.Router()
const usermodel = require("./model")


//post
router.post("/signup",async (req,res)=>{
//checking if user is already existed
let find = await usermodel.find({name:req.body.name,password:req.body.password})

if(find.length===0){
 let newuser = new usermodel({
    name:req.body.name,
    password : req.body.password,
    age:req.body.age,
    lastname:req.body.lastname
})
newuser.save()
res.send("added").status(200)
}else{
    res.status("400").send("already found")
}
    
})

module.exports={router}