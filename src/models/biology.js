const { Schema, model } = require("mongoose");

const biologySchema = new Schema({
  title : {
    type: String,
    required: true
  } , 
  description: {
    type: String,
    required: true,
  } , 

});

module.exports = model("biology", biologySchema);
