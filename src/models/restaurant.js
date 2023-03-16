const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image : {
    type : String,
    required: true
  }
});

module.exports = model("restaurant", restaurantSchema);
