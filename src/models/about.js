const { Schema, model } = require("mongoose");

const aboutSchema = new Schema({
  description: {
    type: String,
    required: true,
  }
});

module.exports = model("about", aboutSchema);
