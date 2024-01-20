
// services 
import ListTasksService from "../../services/LisTasksService.js";
import CreateTaskService from "../../services/CreateTasksService.js";
import UpdateTaskService from "../../services/UpdateTaskService.js";
import RemoveTaskService from "../../services/RemoveTaskService.js";
import CompleteTaskService from "../../services/CompleteTaskService.js";
import ImportTasksService from "../../services/ImportTasksService.js";

export default class TasksController {

    async listTasks(_, res) {
        try {

            const listTasksService = new ListTasksService();

            const tasks = await listTasksService.execute();

            res.setHeader('Content-Type', 'application/json');

            if (!tasks.length > 0) {

                res.end(JSON.stringify({ message: "No tasks found", tasks }));
            }

            res.end(JSON.stringify({ message: "Tasks listed successfully", tasks }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }

    }


    async createTask(_, res) {
        try {

            const createTaskService = new CreateTaskService();

            const task = await createTaskService.execute();

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task created successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }

    }

    async updateTaskById(req, res) {
        try {

            const updateTaskService = new UpdateTaskService();

            const { id } = req.params;
            const { name, description } = req.body;

            const task = await updateTaskService.execute(name, description, id);

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task updated successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }

    async removeTaskById(req, res) {
        try {

            const removeTaskService = new RemoveTaskService();

            const { id } = req.params;

            res.setHeader('Content-Type', 'application/json');

            await removeTaskService.execute(id);

            res.end(JSON.stringify({ message: "Task removed successfully" }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }


    async completeTaskById(req, res) {
        try {

            const completeTaskService = new CompleteTaskService();

            const { id } = req.params;

            const task = await completeTaskService.execute(id);

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task completed successfully", task }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }

    async importTasks(_, res) {
        try {

            const importTasksService = new ImportTasksService();

            const tasks = await importTasksService.execute();

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Tasks imported successfully", tasks }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error getting tasks: ' + error.message);
        }
    }

}