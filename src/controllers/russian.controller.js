const Russian = require("../models/russian");

const getRussianController = async (req, res) => {
  const russian = await Russian.find();
  res.status(200).json({ russian });
};

const createRussianController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newRussian = {
      title: title,
      description: description,
    };

    const russian = await new Russian(newRussian).save();

    res.status(201).json({ message: "Russain  added", data: russian });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getRussianController,
  createRussianController,
};
