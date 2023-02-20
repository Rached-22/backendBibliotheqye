const express=require("express");
const { models } = require("mongoose");
const router=express.Router();
const Auteur=require("../models/auteur");

//afficher la liste des auteurs
router.get('/',async(req,res)=>{
    try{
        const aut=await Auteur.find();
        res.status(200).json(aut);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});
//creer un nouveau auteur
router.post('/',async(req,res)=>{
    const{nomauteur,emailauteur,numtel}=req.body;
    const aut1=new Auteur ({nomauteur:nomauteur,emailauteur:emailauteur,numtel:numtel});
    try{
        await aut1.save();
        res.status(200).json(aut1);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});
//chercher un auteur
router.get('/:auteurId',async(req,res)=>{
    const id=req.params.auteurId;
    try{
        const aut=await Auteur.findById(id);
        res.status(200).json(aut);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
//modifier un auteur
router.put('/:auteurId',async(req,res)=>{
    const{nomauteur,emailauteur,numtel}=req.body;
    const id=req.params.auteurId;
    try{
        const aut1=({nomauteur:nomauteur,emailauteur:emailauteur,numtel:numtel,_id:id});
        await Auteur.findByIdAndUpdate(id,aut1);
        console.log(aut1);
        res.status(200).json(aut1);
       
    }
    catch(error){
        res.status(404).json({message:error.message}); 
    }

});

//supprimer un auteur
router.delete('/:auteurId',async(req,res)=>{
    const id=req.params.auteurId;
    try{
        
        await Auteur.findByIdAndDelete(id);
        res.status(200).json({message:"auteur deleted successfully"});
       
    }
    catch(error){
        res.status(404).json({message:error.message}); 
    }

});




module.exports=router;