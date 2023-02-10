const express = require("express");
const app = express();
const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const adminRouter = require("./src/routers/admin")
const { json } = require("body-parser");
const createRequestController = require("./src/controllers/request.controller")
const CreatePlanController = require("./src/controllers/plan.controller")
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
        url: "http://localhost:3000",
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


// app.use((req, res, next) => {
//   req.headers.authorization;
//   console.log(req.path);
//   next();
// });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/request" , (req  , res)=> {
  createRequestController
})

app.post("/plan" , (req , res) => {
  CreatePlanController
})
app.listen(port, () => {
  console.log(`Example app is listening on port https://localhost:${port}`);
});
