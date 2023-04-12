const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  image: {
    type: String,
    required: true,
  } , 

});

module.exports = model("course", courseSchema);
