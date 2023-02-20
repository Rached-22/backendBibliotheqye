var express=require("express");
var router=express.Router()
var Livre=require("../models/livre");

//afficher la liste des livres
router.get('/',async(req,res)=>{
    try{
        //const liv=await Livre.find();
        const liv=await Livre.find().populate("specialite").populate("maised").populate("auteurs").exec();


        res.status(200).json(liv);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }   
});
//creer un nouveau livre
router.post('/',async(req,res)=>{
    const {isbn,titre,annedition,prix,couverture,maised,specialite,auteurs}=req.body;
    const liv1=new Livre({isbn:isbn,titre:titre,annedition:annedition,prix:prix,couverture:couverture,maised:maised,specialite:specialite,auteurs:auteurs})
    try{
        await liv1.save();
        res.status(200).json(liv1);

    } 
    catch(error){
        res.status(404).json({message:error.message});
   }  
});
//chercher un livre
router.get('/:livreId',async(req,res)=>{
    id=req.params.livreId;
    try{
        const liv=await Livre.findById(id).populate("specialite").populate("maised").populate("auteurs").exec();
        res.status(200).json(liv);

    }
    catch(error){
        res.status(404).json({message:error.message});
   }  

});
//Modifier un livre
router.put('/:livreId',async(req,res)=>{
    const id=req.params.livreId;
    const {isbn,titre,annedition,prix,couverture,maised,specialite,auteurs}=req.body;
    try{
        const liv1=({isbn:isbn,titre:titre,annedition:annedition,prix:prix,couverture:couverture,maised:maised,specialite:specialite,auteurs:auteurs,_id:id});
        await Livre.findByIdAndUpdate(id,liv1);
        console.log(liv1);
        res.status(200).json(liv1);

    }
    catch(error){
        res.status(404).json({message:error.message});
   }  
});
//supprimer un livre
router.delete('/:livreId',async(req,res)=>{
    const id=req.params.livreId;
    
    try{
        await Livre.findByIdAndDelete(id);
        res.status(200).json({message:"livre deleted successfully"});

    }
    catch(error){
        res.status(404).json({message:error.message});
   }  
});




module.exports=router;