const data = require("./db.js")

const jsonServer = require("json-server")
const middlewares = jsonServer.defaults()
const port = process.env.Port || 8000
require('dotenv').config()
const server = jsonServer.create()
const router = jsonServer.router(data)

server.use(middlewares)
server.use(router)
server.listen(port, console.log(`listning on ${port}`))