const { Schema, model } = require("mongoose");

const requestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  activity: {
    type: String, 
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = model("request", requestSchema);
