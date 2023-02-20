var express=require("express");
var router=express.Router();
var Editeur=require("../models/editeur");

//afficher liste des editeurs
router.get('/',async(req,res)=>{
    try{

        const edit=await Editeur.find();
        res.status(200).json(edit);
    }
    catch(error){
        res.status(404).json({message:error.message});

    }
    
});
//créér un nouveau editeur
router.post('/',async(req,res)=>{
    const {maisonedit,siteweb,email}=req.body;
    const edit1=new Editeur({maisonedit:maisonedit,siteweb:siteweb,email:email});
    try{
        await edit1.save();
        res.status(200).json(edit1);

    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
//chercher un editeur
router.get("/:editeurId",async(req,res)=>{
    const id=req.params.editeurId;
    try{
       const edit=await Editeur.findById(id);
       res.status(200).json(edit);


    }
    catch(error){
        res.status(404).json({message:error.message});
    }

});
//modifier un editeur
router.put('/:editeurId',async(req,res)=>{
    const {maisonedit,siteweb,email}=req.body;
    const id=req.params.editeurId;
    try{
        const edit1=({maisonedit:maisonedit,siteweb:siteweb,email:email,_id:id});
        await Editeur.findByIdAndUpdate(id,edit1);
        console.log(edit1);
        res.status(200).json(edit1);


    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});
//supprimer un editeur
router.delete("/:editeurId",async(req,res)=>{
    id=req.params.editeurId;
    try{
        await Editeur.findByIdAndDelete(id);
        res.status(200).json({message:"Editeur deleted successfully"});

    }
    catch(error){
        res.status(404).json({message:error.message});
    }
    
})








module.exports=router;
