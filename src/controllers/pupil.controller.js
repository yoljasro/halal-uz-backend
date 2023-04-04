const Pupils = require("../models/pupils");

const getPupilController = async (req, res) => {
  const pupil = await Pupils.find();
  res.status(200).json({ pupil });
};
const createPupilController = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone } = req.body;    

    const candidate = await Pupils.findOne({ email });

    if (candidate)
      return res.status(400).json({ message: "Email already exits" });
    const newPupils = {
      name: name,
      email: email,
      phone: phone,
    };

    const pupil = await new Pupils(newPupils).save();

    res.status(201).json({ message: "Request sended", data: pupil });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getPupilController,
  createPupilController,
};
