"use strict";

var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var specialiteRouter = require("./routes/specialite.route");
var editeurRouter = require("./routes/editeur.route");
var auteurRouter = require("./routes/auteur.route");
var livreRouter = require("./routes/livre.route");
var cors = require("cors");
dotenv.config();
var app = express();

//Bddy parser midelware
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

//Connexion a la base de donnés
mongoose.connect(process.env.DATABASECLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connexion a la base de données réuissie");
})["catch"](function (err) {
  console.log("Impossible de se connecter a la base de données", err);
  process.exit();
});
app.get('/', function (req, res) {
  res.send("bonjour");
});
app.use('/api/specialites', specialiteRouter);
app.use('/api/editeurs', editeurRouter);
app.use('/api/auteurs', auteurRouter);
app.use('/api/livres', livreRouter);
app.listen(process.env.PORT, function () {
  console.log("Server is lestening on the port ".concat(process.env.PORT));
});
