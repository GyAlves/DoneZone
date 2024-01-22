// dependencies
import http from "node:http";
import dotenv from "dotenv"

// middlewares
import routeHandlerMiddleware from "./middlewares/route-handler-middleware.js";
import routeParamsHandlerMiddleware from "./middlewares/params-handler-middleware.js";

dotenv.config();

const server = http.createServer((req, res) => {
    routeParamsHandlerMiddleware(req, res, () => {
        routeHandlerMiddleware(req, res);
    });
});

const port = process.env.PORT;

server.listen(port)