const express = require("express");
const app = express();
const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const adminRouter = require("./src/routers/admin")
const { json } = require("body-parser");
const userData = require("./src/data/user.json")
const {createRequestController} = require("./src/controllers/request.controller")
const {createTestController} = require("./src/controllers/test.controller")
const {createPlanController, getPlanController} = require("./src/controllers/plan.controller")
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
      } , 
      {
        url : "https://halal-uz-backend-production.up.railway.app"
      } 
    ],
  }, 
  apis: ["./index.js"],
};

app.use(cors());
app.use(json());

const swaggerSpec = swaggerJSDOC(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/admin" , adminRouter)
// app.use(express.static("public"));
// app.use("/img", express.static(path.join(__dirname, "public/img")));

const uri = "mongodb+srv://jasurbek1221:zg4ifgKiaVTL0nUu@worldhalal.jnka9xa.mongodb.net/?retryWrites=true&w=majority"
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
 *     summary: Request post
 *     requestBody:
 *        content:
 *          application/json:
 *     description: For request post method
 *     responses:
 *         201:
 *         description: Request sended in database
 * 400 :
 *      description : Already exites email users
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
 *     description: This is get method for plans
 *     responses:
 *       200:
 *         description: Plans list
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
 * /aboutCompany:
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


// app.use((req, res, next) => {
//   req.headers.authorization;
//   console.log(req.path);
//   next();
// });  

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/request", createRequestController);
app.post("/plan", createPlanController)
app.get("/plan", getPlanController)
app.post("/test"  , createTestController);
app.get("/user", (req, res) => {
  res.status(200).json(userData);
})
app.get('/aboutCompany', (req, res) => {
  const data = {
    title: "API Title",
    description: "API Description"
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app is listening on port https://localhost:${port}`);
});