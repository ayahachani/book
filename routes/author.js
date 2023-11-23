const express=require("express")
const router= express.Router()
const authorController=require("../controllers/author")

 // Créer un nouveau autheur
 router.post("/",authorController.addAuthor)
 
 module.exports=router