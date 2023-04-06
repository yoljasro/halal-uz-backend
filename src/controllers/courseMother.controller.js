const MotherTongue = require("../models/motherTongue");

const getMotherTongueController = async (req, res) => {
  const mother = await MotherTongue.find();
  res.status(200).json({ mother });
};

const createMotherTongueController = async (req, res) => {
  try {
    const {title ,  description } = req.body;

    const newMother = {
      title : title,
      description: description,
    };

    const mother = await new Mother(newMother).save();

    res.status(201).json({ message: "Description added", data: mother });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  getMotherTongueController,
  createMotherTongueController
};