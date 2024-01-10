const express = require('express');
const mongoose = require('mongoose');

const app =  express();
app.use(express.urlencoded());
app.use(express.json());

const mongodbusername = process.env.MONGO_USERNAME;
const mongodbpassword = process.env.MONGO_PASSWORD;
const mongodbhost = process.env.MONGODB_HOST;
const mongodbport = process.env.MONGODB_PORT;



console.log("mongodbhost=")
const mongodburl = `mongodb://${mongodbusername}:${mongodbpassword}@${mongodbhost}:${mongodbport}/avis?authSource=admin`
console.log(mongodburl)
mongoose.connect(mongodburl,{useNewUrlParser: true,useUnifiedTopology: true});


const schema = new mongoose.Schema({
  texte: String,
  email: String

});

const AvisModel = mongoose.model("avis", schema);

app.get('/api/avis', async (req, res) => {
  const data = await AvisModel.find({});
  res.json(data)
})

app.post('/api/avis', async (req, res) => {
  const texte = req.body.texte;
  const email = req.body.email;
  const avis = await AvisModel.create({texte, email});
  await avis.save()
  console.log(avis);
})

app.listen(8000, () => console.log("App is listening on port 8000"))