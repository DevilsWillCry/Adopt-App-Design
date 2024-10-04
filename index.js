const jsonServer = require("json-server");
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router("./src/api/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

// Servir una página HTML específica al acceder a la raíz
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/', 'index.html')); 
    });

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
