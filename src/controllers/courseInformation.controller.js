const CourseInformation = require("../models/courseInformation");

const getCoursesInformationController = async (req, res) => {
  const courseInformation = await CourseInformation.find();
  res.status(200).json({ courseInformation });
};

const createCourseInformationController = async (req, res) => {
  try {
    const { image } = req.body;

    const newCourseInformation = {
      image: image,
    };

    const courseInformation = await new CourseInformation(newCoursesnewCourseInformation).save();

    res.status(201).json({ message: "Description added", data: courseInformation });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
    createCourseInformationController,
  getCoursesInformationController,
};
