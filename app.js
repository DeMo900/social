//requiring modules
const express = require("express")
const mongo = require("mongoose")
const { router } = require("./post")

let app = express()
app.use(router)
//middlewares
app.set(`view engine`,`ejs`)
//data base 
mongo.connect("mongodb+srv://dodoadam893:AdAm233@cluster0.eoito82.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

console.log("conected to db")
}).catch((err)=>{
    console.log(`error from database ${err}`)
})

//endpoints
//Get
app.get("/login",(req,res)=>{
res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
    })
    app.get("/home",(req,res)=>{
        res.render("home")
        })

      
        app.listen(5000,(err)=>{

          err?console.log(err):console.log("conected")
        })