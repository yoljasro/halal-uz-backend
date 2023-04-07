const Kimyo = require("../models/kimyo");

const getKimyoController = async (req, res) => {
  const kimyo = await Kimyo.find();
  res.status(200).json({ kimyo });
};

const createKimyoController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newKimyo = {
      title: title,
      description: description,
    };

    const kimyo = await new Kimyo(newKimyo).save();

    res.status(201).json({ message: "Kimyo  added", data: kimyo });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getKimyoController,
  createKimyoController,
};
