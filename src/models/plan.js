const { Schema, model } = require("mongoose");

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type : String,
    required: true,
  },
  sevenam: {
    type: String,
    required: true,
  },
  eightam: {
    type : String,
    required: true,
  },
  nineam: {
    type: String,
    required: true,
  },
  tenam: {
    type : String,
    required: true,
  },
  elevenam: {
    type: String,
    required: true,
  },
  twelweam: {
    type : String,
    required: true,
  },
  onepm: {
    type: String,
    required: true,
  },
  twopm: {
    type : String,
    required: true,
  },
  threepm: {
    type: String,
    required: true,
  },
  fourpm: {
    type : String,
    required: true,
  },
  fivepm: {
    type: String,
    required: true,
  },
  sixpm: {
    type : String,
    required: true,
  },
  sevenpm: {
    type: String,
    required: true,
  },
  eightpm: {
    type : String,
    required: true,
  },
  ninepm: {
    type: String,
    required: true,
  },
  tenpm: {
    type : String,
    required: true,
  },
});

module.exports = model("Plan", planSchema);