const { Schema, model } = require("mongoose");

const motherTongueSchema = new Schema({
  title : {
    type: String,
    required: true
  } , 
  description: {
    type: String,
    required: true,
  } , 

});

module.exports = model("motherTongue", motherTongueSchema);
