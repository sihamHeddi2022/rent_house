const path = require("path")
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const dbURI = 'mongodb://localhost:27017/rentHouses'

express.use("style/",express.static(path.join(__dirname,"public","style")))

app.set('view engine','ejs');
app.set("views","public")



mongoose.connect(dbURI,function(err) {
    
    if(err) console.log(err)

    app.listen(8080)

});





app.get("/",(req,res)=>{
     res.render("index")
})