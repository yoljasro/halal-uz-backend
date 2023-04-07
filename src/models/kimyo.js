const { Schema, model } = require("mongoose");

const kimyoSchema = new Schema({
  title : {
    type: String,
    required: true
  } , 
  description: {
    type: String,
    required: true,
  } , 

});

module.exports = model("kimyo", kimyoSchema);
