const Plan = require("../models/plan");

const CreatePlanController = async (req, res) => {
  try {
    console.log(req.body);
    const {
      email,
      password,
      name,
      eightam,
      nineam,
      tenam,
      elevenam,
      twelweam,
      onepm,
      twopm,
      threepm,
      fourpm,
      fivepm,
      sixpm,
      sevenpm,
      eightpm,
      ninepm,
      tenpm,
    } = req.body;

    //   const candidate = await Plan.findOne({ email });

    //   if (candidate)
    //     return res.status(400).json({message: 'Email already exits'});

    //   const hashPassword = await bcrypt.hash(password, 12);

    const newPlan = {
      email,
      password,
      name,
      eightam,
      nineam,
      tenam,
      elevenam,
      twelweam,
      onepm,
      twopm,
      threepm,
      fourpm,
      fivepm,
      sixpm,
      sevenpm,
      eightpm,
      ninepm,
      tenpm,
    };

    const plan = await new Request(newPlan).save();

    res.status(201).json({ message: "Plan created", data: plan });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  CreatePlanController,
};