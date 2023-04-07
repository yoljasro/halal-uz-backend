const { Schema, model } = require("mongoose");

const mathSchema = new Schema({
  title : {
    type: String,
    required: true
  } , 
  description: {
    type: String,
    required: true,
  } , 

});

module.exports = model("math", mathSchema);
