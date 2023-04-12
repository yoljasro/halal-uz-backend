const Courses = require("../models/courses");

const getCoursesController = async (req, res) => {
  const course = await Courses.find();
  res.status(200).json({ course });
};

const createCoursesController = async (req, res) => {
  try {
    const { image } = req.body;

    const newCourses = {
      image: image,
    };

    const course = await new Courses(newCourses).save();

    res.status(201).json({ message: "Description added", data: course });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCoursesController,
  getCoursesController,
};
