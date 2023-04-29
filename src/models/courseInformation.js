const { Schema, model } = require("mongoose");

const courseInformationSchema = new Schema({
  title : {
    type: String,
    required: true
  } , 
  description: {
    type: String,
    required: true,
  } , 

});

module.exports = model("courseInformation", courseInformationSchema);
