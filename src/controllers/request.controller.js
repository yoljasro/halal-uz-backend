const Request = require("../models/request");

const getRequestController = async (req, res) => {
  const request = await Request.find();
  res.status(200).json({ request });
};
const createRequestController = async (req, res) => {
  try {
    console.log(req.body);
    const { name, surname, brandName, activity, phone, email } = req.body;

    const candidate = await Request.findOne({ email });

    if (candidate)
      return res.status(400).json({ message: "Email already exits" });

    //   const hashPassword = await bcrypt.hash(password, 12);

    const newRequest = {
      name: name,
      surname: surname,
      brandName: brandName,
      activity: activity,
      phone: phone,
      email: email,
    };

    const request = await new Request(newRequest).save();

    res.status(201).json({ message: "Request sended", data: request });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createRequestController,
  getRequestController
};
