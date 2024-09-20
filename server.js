import http from "http";

const PORT = 3000;

const routes = {
    "/": "Node.js course",
    "/livros": "Livros route",
    "/autores": "Autores route"
}

const server = http.createServer((req, res) =>  {
    // HEADERS
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log("Server listen");
});