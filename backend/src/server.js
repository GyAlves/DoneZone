// dependencies
import http from "node:http";

// middlewares
import routeHandlerMiddleware from "./middlewares/route-handler-middleware.js";
import routeParamsHandlerMiddleware from "./middlewares/params-handler-middleware.js";

const server = http.createServer((req, res) => {
    routeParamsHandlerMiddleware(req, res, () => {
        routeHandlerMiddleware(req, res);
    });
});

const port = 4000;

server.listen(port, () => {
    console.log("Server running on port " + port)
})