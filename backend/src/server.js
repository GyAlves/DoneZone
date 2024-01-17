import http from "node:http"

const server = http.createServer((req, res) => {
    return res.end("Hello, world!")
});

const port = 4000;

server.listen(port, () => {
    console.log("Server running on port " + port)
})