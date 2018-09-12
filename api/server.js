const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/login', (req, res) => {
  const { username, pass } = req.query
  if (username === "prueba@prueba.com" && pass === "prueba") {
    res.json(username)
  } else {
    res.status(500).jsonp({
      error: "usuario no valido"
    })
  }
})

server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})