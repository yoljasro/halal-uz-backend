const English = require("../models/english");

const getEnglishController = async (req, res) => {
  const english = await English.find();
  res.status(200).json({ english });
};

const createEnglishController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newEnglish = {
      title: title,
      description: description,
    };

    const english = await new English(newEnglish).save();

    res.status(201).json({ message: "emglish  added", data: english });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getEnglishController,
  createEnglishController,
};
