
const RemoveTaskController = (req, res) => {
    try {

        const task = {}

        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({ message: "Task removed successfully", task }));

    } catch (error) {

        res.writeHead(400);
        res.end('Error getting tasks: ' + error.message);
    }
}

export default RemoveTaskController;