const Literature = require("../models/literature");

const getLiteratureController = async (req, res) => {
  const literature = await Literature.find();
  res.status(200).json({ literature });
};

const createLiteratureController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newLiterature = {
      title: title,
      description: description,
    };

    const literature = await new Literature(newLiterature).save();

    res.status(201).json({ message: "Literature  added", data: literature });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getLiteratureController,
  createLiteratureController,
};
