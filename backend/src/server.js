// dependencies
import http from "node:http";

// middlewares
import routeHandler from "./middlewares/route-handler.js";

const server = http.createServer((req, res) => routeHandler(req, res));

const port = 4000;

server.listen(port, () => {
    console.log("Server running on port " + port)
})