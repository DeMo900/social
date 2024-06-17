let mongo = require("mongoose") 


let user = new mongo.Schema({
    name:String,
    age:Number,
    password:String,
    lastname:String
})

  let usermodel = mongo.model("user",user)

  //export usermodel
  module.exports=usermodel;