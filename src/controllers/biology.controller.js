const Biology = require("../models/biology");

const getBiologyController = async (req, res) => {
  const biology = await Biology.find();
  res.status(200).json({ biology });
};

const createBiologyController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newBiology = {
      title: title,
      description: description,
    };

    const biology = await new Biology(newBiology).save();

    res.status(201).json({ message: "Biology  added", data: biology });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getBiologyController,
  createBiologyController,
};
