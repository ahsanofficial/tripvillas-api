// // const data = require("./db.js")

// const jsonServer = require("json-server")
// const middlewares = jsonServer.defaults()
// const port = process.env.Port || 8000
// require('dotenv').config()
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')

// server.use(middlewares)
// server.use(router)
// server.listen(port, console.log(`listning on ${port}`))

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

require('dotenv').config()
const port = process.env.Port || 8000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running')
})