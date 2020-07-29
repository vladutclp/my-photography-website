const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/photo_website_db", { useNewUrlParser: true, useUnifiedTopology: true });//Create database

const imagesSchema = new mongoose.Schema({
  name: String,
  imageURL: String,
  description: String
});

const Image = mongoose.model("Image", imagesSchema);

// const fog1 = new Image({
//   name: "Fog2",
//   imageURL: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=671&q=80",
//   description: "Cacat1"
// });

// fog1.save((err, image) =>{
//   if(err){
//     console.log(er)
//   }
//   else{
//     console.log("Image saved");
//     console.log(image);
//   }
// })

app.get("/", (req, res) =>{
  console.log("Sunt pe root");
});

app.get("/images", (req, res) =>{
  Image.find({}, (err, allImages) =>{
    if(err){
      console.log("Something went wrong...");
      console.log(err);
    }
    else{
      res.json({Image: allImages});
    }
  });
  console.log("Sunt la /images");
})


// app.get('/api/customers', (req, res) =>{
//   const customers = [
//     {id: 1, firstName: 'Jaxon', secondName: 'Koxeanu'},
//     {id: 2, firstName: 'Fisteus', secondName: 'Calithos'}
//   ];
//   console.log("This route was reached");
//   res.json(customers);
// });

app.listen(port, () => console.log(`Server started at port ${port}...`));