// const { default: adminBro } = require("admin-bro"); 
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose =require("mongoose")

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
    databases : [mongoose] , 
    rootPath : "/admin" , 
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
