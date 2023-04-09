// const { default: adminBro } = require("admin-bro");
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");
// models
const About = require("../models/about");
const Request = require("../models/request");
const Restaurant = require("../models/restaurant");
const Pupils = require("../models/pupils");
// courses Models
const MotherTongue = require("../models/motherTongue");
const Biology = require("../models/biology");
const Math = require("../models/math");
const Kimyo = require("../models/kimyo");
const Literature = require("../models/literature");
const Russian = require("../models/russian");
const Fizi = require("../models/fizi");
const English = require("../models/english");
const Register = require("../models/register")

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  branding: {
    companyName: "JasurBek",
  },
  databases: [mongoose],
  rootPath: "/admin",
  resources: [
    {
      resource: Request,
    },
    {
      resource: About,
    },
    {
      resource: Pupils,
    },
    {
      resource: MotherTongue,
    },
    {
      resource: Biology,
    },
    {
      resource: Math, 
    },
    {
      resource: Kimyo,
    },
    {
      resource: Literature,
    },
    {
      resource: Russian,
    },
    {
      resource: Fizi
    },
    {
      resource: English,
    },
    {
      resource: Register,
    } ,
    {
      resource: Restaurant,
      options: {
        properties: {
          image: {
            isVisible: true,
          },
        },
      },
    },
  ],
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || "saidaliyevjasur450@gmail.com",
  password: process.env.ADMIN_PASSWORD || "worldhalal1221",
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "worldhalal",
  cookiePassword: process.env.ADMIN_COOKIE_PASS || "worldhalal1221",
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
