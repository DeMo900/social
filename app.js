//require packages

const bodyParser = require("body-parser")
const express = require("express")
const mongo = require("mongoose")

let app = express()
//middlewares
app.use(express.json())
app.set(`view engine`,`ejs`)
app.use(bodyParser)
app.use(bodyParser.urlencoded({extended:true}))
//data base 
mongo.connect("mongodb+srv://dodoadam893:AdAm233@cluster0.eoito82.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

console.log("conected to db")
}).catch((err)=>{
    console.log(`error from database ${err}`)
})
//signup schema
let signup = new mongo.Schema({
    name:String,
    age:Number,
    password:String,
    lastname:String
})

let signupmodel = mongo.model("signup",signup)

//login schema
let login = new mongo.Schema({
    name:String,
    password:String
})

let loginmodel = mongo.model("login",login)

