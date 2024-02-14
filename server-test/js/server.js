const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const midllewares = jsonServer.defaults()

const PORT = 3000

server.use(midllewares)
server.use(router)
server.listen(PORT, () => {
   console.log('Server started');
})