const Fizi = require("../models/fizi");

const getFiziController = async (req, res) => {
  const fizi = await Fizi.find();
  res.status(200).json({ fizi });
};

const createFiziController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newFizi = {
      title: title,
      description: description,
    };

    const fizi = await new Fizi(newFizi).save();

    res.status(201).json({ message: "Fizi  added", data: fizi });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getFiziController,
  createFiziController,
};
