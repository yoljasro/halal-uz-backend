const { Schema, model } = require("mongoose");

const russianSchema = new Schema({
  title : {
    type: String,
    required: true
  } , 
  description: {
    type: String,
    required: true,
  } , 

});

module.exports = model("russian", russianSchema);
