const mongoose=require("mongoose");
const Editeur=require('./editeur');
const Specialite=require('./specialite');
const Auteur=require("./auteur");
const livreSchema=mongoose.Schema({
    isbn:{type:String,required:true,unique:true},
    titre:{type:String,required:true},
    annedition:{type:Number,required:true},
    prix:{type:Number,required:true},
    couverture:{type:String,required:false},
    maised:{type:mongoose.Schema.Types.ObjectId,ref:Editeur},
    specialite:{type:mongoose.Schema.Types.ObjectId,ref:Specialite},
    auteurs:[{type:mongoose.Schema.Types.ObjectId,ref:Auteur}]

})
module.exports=mongoose.model('livre',livreSchema)

