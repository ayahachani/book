const mongoose=require("mongoose")
const idValidator = require('mongoose-id-validator');
const Joi = require('joi');
const {Schema}=mongoose

const bookSchema=Schema({
    title:{ 
        type:String,
        required:true,
    },
    author: { 
        type: Schema.Types.ObjectId,
        ref:'author'  
    },
    category: [{ 
        type: Schema.Types.ObjectId,
        ref:'category'  
    }],
    startDate: Joi.date().iso().required(),
     endDate: Joi.date().iso().greater(Joi.ref('startDate')).required()
    
},
{
    timestamps: true // Cette option active les timestamps
},)
//bookSchema.plugin(idValidator);
bookSchema.statics.findByAuthor = function(authorId, callback) {
    return this.find({ author: authorId }, callback);
  };
//L'auteur doit avoir au moins un livre précédent
  bookSchema.path('author').validate(async function(value) {
    const Book = mongoose.model('Book');
    const bookCount = await Book.countDocuments({ author: value });
    return bookCount > 0;
  }, 'L\'auteur doit avoir écrit d\'autres livres.');
module.exports= mongoose.model("Book",bookSchema)