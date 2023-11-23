const express=require("express")
const router= express.Router()
const bookController=require("../controllers/book")
// Obtenir la liste des livres
router.get("/",bookController.fetchBooks)
 //Obtenir un livre par son ID
 router.get("/:id",bookController.getBookById)
 // Créer un nouveau livre
 router.post("/",bookController.addBook)
 // Mettre à jour un livre
 router.patch("/:id",bookController.updateBook)
 //Supprimer un livre
 router.delete("/:id",bookController.deleteBook)
 
 router.get('/author/:id', bookController.findByAuthor)

//Ajouter livre en Vérifiez si l'auteur a des livres précédents
 router.post("/createlivre",bookController.addBookAuthor)


 module.exports=router