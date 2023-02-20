const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const specialiteRouter=require("./routes/specialite.route");
const editeurRouter=require("./routes/editeur.route");
const auteurRouter=require("./routes/auteur.route");
const livreRouter=require("./routes/livre.route");
const cors=require("cors");


dotenv.config();
const app=express();

//Bddy parser midelware
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery",false);

//Connexion a la base de donnés
mongoose.connect(process.env.DATABASECLOUD,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log("Connexion a la base de données réuissie")

}).catch(err=>{
    console.log("Impossible de se connecter a la base de données",err);
    process.exit();
});
app.get('/',(req,res)=>{
    res.send("bonjour");
});
app.use('/api/specialites',specialiteRouter);
app.use('/api/editeurs',editeurRouter);
app.use('/api/auteurs',auteurRouter);
app.use('/api/livres',livreRouter);
app.listen(process.env.PORT,()=>{
    console.log(`Server is lestening on the port ${process.env.PORT}`);
});



