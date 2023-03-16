// const { default: adminBro } = require("admin-bro"); 
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose =require("mongoose")
// models
const About = require("../models/about")
const Request = require("../models/request")
const Restaurant = require("../models/restaurant")

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
    databases : [mongoose] , 
    rootPath : "/admin"  ,
    resources: [
      {
        resource: Request
      } ,
      {
        resource : About
      } , 
      { 
        resource : Restaurant ,
        options: {
          properties: {
            image: {
              isVisible: true,
            },
          },
        },
      }
    ]
})

const ADMIN ={
    email: process.env.ADMIN_EMAIL ||  "saidaliyevjasur450@gmail.com" , 
    password: process.env.ADMIN_PASSWORD || "worldhalal1221" , 
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'worldhalal',
    cookiePassword: process.env.ADMIN_COOKIE_PASS || 'worldhalal1221',
    authenticate: async (email, password) => {
      if (email === ADMIN.email && password === ADMIN.password) {
        return ADMIN
      }
      return null
    }
  })

module.exports = router
