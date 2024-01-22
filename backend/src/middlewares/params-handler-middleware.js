
// utils
import cleanUrlPath from "../utils/clean-url-util.js";

const routeParamsHandlerMiddleware = async (req, _, next) => {

    let reqBody = '';

    const newUrl = new URL(req.url, "http://localhost:4000"); // TODO: put on .env

    const { cleanUrl, urlParams } = cleanUrlPath(newUrl.pathname);

    const queryParamsObject = {};

    newUrl.searchParams.forEach((value, key) => {
        queryParamsObject[key] = value;
    });

    req.on('data', (payload) => {
        reqBody += payload;
    });

    req.on("end", () => {

        if (cleanUrl !== "/tasks/import") {

            reqBody = reqBody === "" ? {} : JSON.parse(reqBody);
            req.body = reqBody;

        } else {

            const boundary = 'X-INSOMNIA-BOUNDARY';
            const csvDataWithoutBoundary = reqBody.split(`--${boundary}--`)[0].split(`--${boundary}`)[1].trim();
            req.body = csvDataWithoutBoundary;
        }

        req.queryParams = queryParamsObject;
        req.path = cleanUrl;

        if (urlParams.length > 0) req.urlParams = urlParams;

        next();
    });

}

export default routeParamsHandlerMiddleware;
