

export default class TasksController {

    async listTasks(req, res) {
        try {

            const tasks = []

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Tasks listed successfully", tasks }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }

    }


    async createTask(req, res) {
        try {

            const task = {}

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task created successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }

    }

    async updateTaskById(req, res) {
        try {

            const task = {}

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task updated successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }

    async removeTaskById(req, res) {
        try {

            const task = {}

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task removed successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }


    async completeTaskById(req, res) {
        try {

            const task = {}

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task completed successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }

    async importTasks(req, res) {
        try {

            const tasks = []

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Tasks imported successfully", tasks }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }

}