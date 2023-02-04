const express = require("express");
const app = express();
const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { json } = require("body-parser");
let port = process.env.PORT || 4000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node Js API from JasurBek 1",
      version: "1.0.0",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "http://139.144.180.200:3000",
      },
    ],
  },
  apis: ["./index.js"],
};

app.use(cors());
app.use(json());

// const swaggerSpec = swaggerJSDOC(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use(express.static("public"));
// app.use("/img", express.static(path.join(__dirname, "public/img")));

// const uri =
//   "mongodb+srv://<jasur>:0Eyu3nFcPvnlRNag@cluster0.luf7pct.mongodb.net/?retryWrites=true&w=majority/testfor";

// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected MongoDB ");
//   } catch (error) {
//     console.log(error);
//   }
// }
// connect();

// /**
//  * @swagger
//  * /product-info:
//  *   get:
//  *     description: This is a get api call
//  *     responses:
//  *       200:
//  *         description: Success
//  */  

// app.use((req, res, next) => {
//   req.headers.authorization;
//   console.log(req.path);
//   next();
// });

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.get("/product-info", (req, res) => {
//   res.send(importData);
// });

// app.post("/product-info-buy", createProductController );

app.listen(port, () => {
  console.log(`Example app is listening on port https://localhost:${port}`);
});
