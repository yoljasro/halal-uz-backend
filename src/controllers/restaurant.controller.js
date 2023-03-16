const Restaurant = require("../models/restaurant");

const getRestaurantController = async (req, res) => {
  const restaurant = await Restaurant.find();
  res.status(200).json({ restaurant });
};

const createRestaurantController = async (req, res) => {
  try {
    const { title, image } = req.body;


    const newRestaurant = {
      title: title,
      image: image,
    };

    const restaurant = await new Restaurant(newRestaurant).save();

    res.status(201).json({ message: "Restaurant added", data: restaurant });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  createRestaurantController,
  getRestaurantController
};
