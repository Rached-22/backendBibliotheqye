const mongoose=require("mongoose");
const specialiteSchema=mongoose.Schema({
    nomspecialite:{type:String,required:true,unique:true}
})
module.exports=mongoose.model('specialite',specialiteSchema)
