

const cleanUrlPath = (path) => {

    const isUUIDRegex = /^[0-9a-fA-F]{32}$/

    const pathArr = path.split("/");

    let cleanUrl = "";
    const urlParams = [];

    pathArr.forEach(path => {

        if (path === "") {

            cleanUrl += "/"
            return;
        }

        if (!isUUIDRegex.test(path)) {

            cleanUrl += `${path}`
            return;
        }

        cleanUrl += `/:id/`
        urlParams.push(path);
    });

    cleanUrl = cleanUrl.replace(/\/$/, '');

    return { cleanUrl, urlParams };
}

export default cleanUrlPath;