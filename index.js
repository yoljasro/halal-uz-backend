const express = require("express");
const app = express();
const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const adminRouter = require("./src/routers/admin");
const { json } = require("body-parser");
const multer = require("multer");
const userData = require("./src/data/user.json");
// controllers
const {
  createRequestController,
  getRequestController,
} = require("./src/controllers/request.controller");
const {createUserController  , getUserController ,loginController}=  require("./src/controllers/user.controller")
const {
  createPupilController,
  getPupilController,
} = require("./src/controllers/pupil.controller");
const {
  createTestController,
  getTestController,
} = require("./src/controllers/test.controller");
const {
  createRestaurantController,
  getRestaurantController,
} = require("./src/controllers/restaurant.controller");
const {
  createAboutController,
  getAboutController,
} = require("./src/controllers/about.controller");
const {
  createPlanController,
  getPlanController,
} = require("./src/controllers/plan.controller");
const {getMotherTongueController , createMotherTongueController} = require("./src/controllers/courseMother.controller")
const {createBiologyController , getBiologyController} = require("./src/controllers/biology.controller")
const {createEnglishController , getEnglishController} = require("./src/controllers/english.controller")
const {createFiziController , getFiziController} = require("./src/controllers/fizi.controller")
const {createLiteratureController , getLiteratureController} = require("./src/controllers/literature.controller")
const {createMathController , getMathController} = require("./src/controllers/math.controller")
const {createRussianController , getRussianController} = require("./src/controllers/russian.controller")
const {createKimyoController , getKimyoController} = require("./src/controllers/kimyo.controller")
const {createCoursesController , getCoursesController} = require("./src/controllers/course.controller")
const {createCourseInformationController , getCoursesInformationController} = require("./src/controllers/courseInformation.controller")
let port = process.env.PORT || 5000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "worldhalal.uz API",
      version: "1.0.0",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
      {
        url: "http://smartshopcenter.org:5000",
      },
    ],
  },
  apis: ["./index.js"],
};

app.use(cors());
app.use(json());
app.use('/uploads', express.static('uploads'));
const swaggerSpec = swaggerJSDOC(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/admin", adminRouter);
// app.use(express.static("public"));
// app.use("/img", express.static(path.join(__dirname, "public/img")));


const uri =
  "mongodb+srv://jasurbek1221:zg4ifgKiaVTL0nUu@worldhalal.jnka9xa.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected MongoDB ");
  } catch (error) {
    console.log(error);
  }
}
connect();




/**
 * @swagger
 * /request:
 *   post:
 *     summary: request 
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                name : 
 *                  type : string
 *              required:
 *                - email
 *                - password
 *                - name
 *     description: Request
 *     responses:
 *         201:
 *         description: Request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /request:
 *   get:
 *     description: Request Get Method
 *     responses:
 *       200:
 *         description: Request List
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /plan:
 *   post:
 *     summary: Plan 
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                name : 
 *                  type : string
 *              required:
 *                - email
 *                - password
 *                - name
 *     description: For plan post method 
 *     responses:
 *         201:
 *         description: Created database plans
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /about:
 *   post:
 *     summary: About Company post 
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Description Added
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /restaurant:
 *   post:
 *     summary: Restaurant API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Restaurant added
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /restaurant:
 *   get:
 *     description: Restaurants
 *     responses:
 *       200:
 *         description: Lists Restorans
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /test:
 *   post:
 *     summary: test 
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                name : 
 *                  type : string
 *              required:
 *                - email
 *                - name
 *     description: Test 
 *     responses:
 *         201:
 *         description: Created database plans
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /plan:
 *   get:
 *     description: Plan Get Method
 *     responses:
 *       200:
 *         description: Plan   List
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /user:
 *   get:
 *     description: This is get method for users
 *     responses:
 *       200:
 *         description: Users
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /test:
 *   get:
 *     description: Test API
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

// app.use((req, res, next) => {
//   req.headers.authorization;
//   console.log(req.path);
//   next();
// });

/**
 * @swagger
 * /about:
 *   get:
 *     description: About company API
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

// course APIS

/**
 * @swagger
 * /pupils:
 *   post:
 *     summary: Pupils API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Pupils request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /pupils:
 *   get:
 *     description: Pupils 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */


/**
 * @swagger
 * /mothertongue:
 *   post:
 *     summary: MOther tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Mother tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /mothertongue:
 *   get:
 *     description: Mother Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /biology:
 *   post:
 *     summary: Biology tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: BIology tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

    /**
 * @swagger
 * /biology:
 *   get:
 *     description: Biology Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /math:
 *   post:
 *     summary: BioMathlogy tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: BIology tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

   /**
 * @swagger
 * /math:
 *   get:
 *     description: Math Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /kimyo:
 *   post:
 *     summary: Kimyo tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: BIology tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */


  /**
 * @swagger
 * /kimyo:
 *   get:
 *     description: Kimyo Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /literature:
 *   post:
 *     summary: Literature tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Literature tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */


  /**
 * @swagger
 * /literature:
 *   get:
 *     description: Kimyo Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /russian:
 *   post:
 *     summary: Literature tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Literature tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */

  /**
 * @swagger
 * /russian:
 *   get:
 *     description: Kimyo Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */


/**
 * @swagger
 * /fizi:
 *   post:
 *     summary: Fizika tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Literature tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */

  /**
 * @swagger
 * /fizi:
 *   get:
 *     description: Fizi Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

/**
 * @swagger
 * /english:
 *   post:
 *     summary: English tongue  API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Literature tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */

  /**
 * @swagger
 * /english:
 *   get:
 *     description: English Tongue 
 *     responses:
 *       200:
 *         description: Succesfull
 * 400:
 *      description : Error user 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Online Market
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Literature tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */


/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Courses API
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Added COurses
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Online Market
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Login tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
    
 */

 /**
 * @swagger
 * /register:
 *   get:
 *     description: Registered Users 
 *     responses:
 *       201:
 *         description: Created
 * 400:
 *      description : User error 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

 /**
 * @swagger
 * /coursesinformation:
 *   get:
 *     description: Courses desc 
 *     responses:
 *       201:
 *         description: Created
 * 400:
 *      description : User error 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */


/**
 * @swagger
 * /courseinformation:
 *   post:
 *     summary: course description -- Title  , description
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *              required:
 *                - description
 *     description: Description
 *     responses:
 *         201:
 *         description: Login tongue  request sended
 * 400 :
 *      description : Error
 *parameters : 
    -name : TITLE 
    in : formData
    required : true

/**
 * @swagger
 * /courses:
 *   get:
 *     description: Courses Users 
 *     responses:
 *       201:
 *         description: Created
 * 400:
 *      description : User error 
 *parameters : 
    -name : TITLE 
    in : formData
    required : true
 */

// app.use((req, res, next) => {
//   req.headers.authorization;
//   console.log(req.path);
//   next();
// });

app.get("/", (req, res) => {
  res.send("hello world. I'm JasurBek");
});

app.post("/request", createRequestController);
app.get("/request", getRequestController);
app.post("/about", createAboutController);
app.get("/about", getAboutController);
app.post("/restaurant", createRestaurantController);
app.get("/restaurant", getRestaurantController);
app.post("/plan", createPlanController);
app.get("/plan", getPlanController);
app.post("/test", createTestController);
app.get("/test", getTestController);
app.post("/pupils", createPupilController);
app.get("/pupils", getPupilController);
app.post("/mothertongue" , createMotherTongueController)
app.get("/motherTongue" , getMotherTongueController)
app.post("/biology" , createBiologyController)
app.get("/biology" , getBiologyController)
app.post("/math"  , createMathController)
app.get("/math" , getMathController)
app.post("/kimyo" , createKimyoController) 
app.get("/kimyo" , getKimyoController)
app.post("/literature" ,createLiteratureController)
app.get("/literature" , getLiteratureController)
app.post("/russian" , createRussianController)
app.get("/russian" , getRussianController)
app.post("/fizi" , createFiziController)
app.get("/fizi" , getFiziController)
app.post("/english" , createEnglishController)
app.get("/english" , getEnglishController)
app.post("/courses" , createCoursesController) 
app.get("/courses" , getCoursesController)
app.post("/courseinformation" , createCourseInformationController)
app.get("/courseinformation"   , getCoursesInformationController)
app.post("/register"  , createUserController)
app.get("/register" , getUserController)
app.post("/login" , loginController)
app.get("/user", (req, res) => {
  res.status(200).json(userData);
});

app.listen(port, () => {
  console.log(`Example app is listening on port https://localhost:${port}`);
});
