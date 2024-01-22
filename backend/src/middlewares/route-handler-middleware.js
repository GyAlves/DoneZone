
// router
import router from "../routes/index.js";

const routeHandler = (req, res) => {

    const { method } = req;

    const routes = Object.values(router);

    const route = routes
        .find(r => r.method === method && r.path === req.path);

    if (!route) {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Service not found');
    }

    return route.handler(req, res);

}

export default routeHandler;