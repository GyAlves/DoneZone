
const GetTasksController = (req, res) => {
    try {

        const tasks = []

        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({ message: "Tasks listed successfully", tasks }));

    } catch (error) {

        res.writeHead(400);
        res.end('Error getting tasks: ' + error.message);
    }
}

export default GetTasksController;