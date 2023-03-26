const express= require("express")
const mongoose= ("mongoose")
require ("dotenv").config()
const app = express ()
app.use(express.json())
app.use(require("./routes/index"))
const PORT = process.env.PORT || 5000
app.listen( PORT, (err)=>{
    if (err){
        console.log("SERVER IS DOWN")
    }
    console.log(` SERVER IS RUNNING ON PORT ${PORT}`)
})
mongoose.connect("mongodb://127.0.0.1:27017/test").then(console.log ("DB CONNECTED")).catch((err)=>console.log(err))