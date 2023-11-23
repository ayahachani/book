const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bookRoutes = require("./routes/book")
const authorRoutes = require("./routes/author")
const categoryRoutes = require("./routes/category")
mongoose.connect(
    "mongodb://127.0.0.1:27017/Book",
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=> console.log("connexion à MongoDB réussie !"))
.catch((e)=>console.log("Connexion à MongoDB échouée!",e))

app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, x-Requested-with,Content, Accept, Content-Type, Authorization"

    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    )
    next()
})
app.use(express.json()) 
app.use("/api/books",bookRoutes)
app.use("/api/author",authorRoutes)
app.use("/api/category",categoryRoutes)

module.exports=app