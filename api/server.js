// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

const projeto = {
    id: 1,
    descricao: 'Your Way Tracker 3.0'
  }
  

  try {
switch (req.method) {
  case "GET":
    if (id === "OBTER_PROJETO") {
      return getOBTER_PROJETO();
    } else {
      return getOBTER_PROJETO(id as string);
    }
  case "POST":
    if (session?.role === "admin") {
      return CADASTRAR_PROJETO(req, res);
    }
  case "PUT":
    if (session?.role === "admin") {
      return ALTERAR_PROJETO(req, res);
    }
  case "DELETE":
    if (session?.role === "admin") {
      return REMOVER_PROJETO(req, res);
    }
  default:
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}
} catch (e) {
console.log(e);
}


server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
