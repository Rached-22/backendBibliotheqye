const mongoose=require("mongoose");
const editeurSchema=mongoose.Schema({
    maisonedit:{type:String,required:true,unique:true},
    siteweb:{type:String,required:true,unique:true},
    emailediteur:{type:String,required:true,unique:true}
})
module.exports=mongoose.model('editeur',editeurSchema);


