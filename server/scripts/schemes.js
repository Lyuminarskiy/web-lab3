const mongoose = require("mongoose");


const {Schema, model} = mongoose;

const Product = model("Product", new Schema({
  id: Number,
  name: String
}));