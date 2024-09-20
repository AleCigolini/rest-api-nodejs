import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) =>  {
    // HEADERS
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Node.js course");
});

server.listen(PORT, () => {
    console.log("Server listen");
});