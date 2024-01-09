const express = require('express');
const mongoose = require('mongoose');

const app =  express();
app.use(express.urlencoded());
app.use(express.json());
mongoose.connect("mongodb://localhost/avis");

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