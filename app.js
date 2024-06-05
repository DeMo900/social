//require packages

const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")

let app = express()
//middlewares
app.use(express.json())
app.set(`view engine`,`ejs`)
app.use(bodyParser)

