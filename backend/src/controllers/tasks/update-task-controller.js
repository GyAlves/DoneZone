
const UpdateTaskController = (req, res) => {
    try {

        const task = {}

        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({ message: "Task updated successfully", task }));

    } catch (error) {

        res.writeHead(400);
        res.end('Error getting tasks: ' + error.message);
    }
}

export default UpdateTaskController;