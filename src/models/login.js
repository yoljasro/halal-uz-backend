const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

module.exports = model("login", loginSchema);