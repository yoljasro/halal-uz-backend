const Test = require("../models/test");

const getTestController = async (req, res) => {
  const test = await Test.find();
  res.status(200).json({ test });
};

const createTestController = async (req, res) => {
  try {
    const { name, email } = req.body;

    const candidate = await Test.findOne({ email });

    if (candidate)
      return res.status(400).json({ message: "Email already exits" });

    // const hashPassword = await bcrypt.hash(password, 12);

    const newTest = {
      name: name,
      email: email,
    };

    const user = await new Test(newTest).save();

    res.status(201).json({ message: "User succesfully created", data: user });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  createTestController,
  getTestController
};
