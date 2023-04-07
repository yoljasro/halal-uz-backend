const Math = require("../models/math");

const getMathController = async (req, res) => {
  const math = await Math.find();
  res.status(200).json({ math });
};

const createMathController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newMath = {
      title: title,
      description: description,
    };

    const math = await new Math(newMath).save();

    res.status(201).json({ message: "Math  added", data: math });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createMathController,
  getMathController,
};
