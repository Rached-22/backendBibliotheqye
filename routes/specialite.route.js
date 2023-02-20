var express=require('express');
var router =express.Router();
var Specialite=require('../models/specialite');

//afficher la liste des spécialités
router.get('/',async(req,res)=>{
    
    try{
        const spec= await Specialite.find();
        res.status(200).json(spec);

    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
//créér une nouvelle spécialité
router.post('/',async(req,res)=>{
    const {nomspecialite}=req.body;
    const spec1=new Specialite({nomspecialite:nomspecialite});
    try{
        await spec1.save();
        res.status(200).json(spec1);

    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
//chercher une catégorie
router.get('/:specialiteId',async(req,res)=>{
    const id=req.params.specialiteId;
    try{
        const spec=await Specialite.findById(id);
        res.status(200).json(spec);

    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
//modifier une catégorie
router.put('/:specialiteId',async(req,res)=>{
    const id=req.params.specialiteId;
    const {nomspecialite}=req.body;
    try{
        const spec1={nomspecialite:nomspecialite,_id:id}
        await Specialite.findByIdAndUpdate(id,spec1);
        console.log(spec1);
        res.status(200).json(spec1);

    }
    catch(error){
        res.status(404).json({message:error.message});
    }


});
//supprimer une catégorie
router.delete('/:specialiteId',async(req,res)=>{
    const id=req.params.specialiteId;
    try{
        await Specialite.findByIdAndDelete(id);
        res.status(200).json({message:"Specialité deleted successfully"})

    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
module.exports=router;
