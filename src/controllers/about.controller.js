const About = require("../models/about");

const getAboutController = async (req, res) => {
  const about = await About.find();
  res.status(200).json({ about });
};

const createAboutController = async (req, res) => {
  try {
    const { description } = req.body;

    const newAbout = {
      description: description,
    };

    const about = await new About(newAbout).save();

    res.status(201).json({ message: "Description added", data: about });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
createAboutController,
getAboutController
};