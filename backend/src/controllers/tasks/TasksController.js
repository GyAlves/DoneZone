
// services 
import ListTasksService from "../../services/LisTasksService.js";
import CreateTaskService from "../../services/CreateTasksService.js";
import UpdateTaskService from "../../services/UpdateTaskService.js";
import RemoveTaskService from "../../services/RemoveTaskService.js";
import CompleteTaskService from "../../services/CompleteTaskService.js";
import ImportTasksService from "../../services/ImportTasksService.js";

//database
import { Database } from "../../database/database-config.js";

// error-handling
import TaskNotFoundError from "../../errors/task-does-not-exists-error.js"
import InvalidCsvMultiPartFormError from "../../errors/task-does-not-exists-error.js"

export default class TasksController {

    constructor() {
        this.tasksDatabase = new Database();
    }

    async listTasks(req, res) {
        try {

            const listTasksService = new ListTasksService(this.tasksDatabase);

            const { queryParams } = req;

            const tasks = await listTasksService.execute({ searchQuery: queryParams });

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Tasks listed successfully", tasks }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error listing all tasks: ' + error.message);
        }

    }

    async createTask(req, res) {
        try {

            const createTaskService = new CreateTaskService(this.tasksDatabase);

            let taskPayload = req.body;

            const taskCreated = await createTaskService.execute(taskPayload);

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: "Task created successfully", task: taskCreated }));

        } catch (error) {

            res.writeHead(400);
            res.end('Error creating task: ' + error.message);
        }

    }

    async updateTaskById(req, res) {
        try {

            const updateTaskService = new UpdateTaskService(this.tasksDatabase);

            const [id] = req.urlParams;

            let taskPayload = req.body;

            const task = await updateTaskService.execute({ id, task: taskPayload });

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task updated successfully", task }));


        } catch (error) {

            if (error instanceof TaskNotFoundError) {
                res.writeHead(error.statusCode);
                return res.end('Error updating task: ' + error.message);
            }

            res.writeHead(400);
            res.end('Error updating task: ' + error.message);
        }
    }

    async removeTaskById(req, res) {
        try {

            const removeTaskService = new RemoveTaskService(this.tasksDatabase);

            const [id] = req.urlParams;

            await removeTaskService.execute({ id });

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: "Task removed successfully" }));

        } catch (error) {

            if (error instanceof TaskNotFoundError) {

                res.writeHead(error.statusCode);
                return res.end('Error removing task: ' + error.message);
            }

            res.writeHead(400);
            res.end('Error deleting task: ' + error.message);
        }
    }

    async completeTaskById(req, res) {
        try {

            const completeTaskService = new CompleteTaskService(this.tasksDatabase);

            const [id] = req.urlParams;

            const task = await completeTaskService.execute({ id });

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Task completed successfully", task }));

        } catch (error) {

            if (error instanceof TaskNotFoundError) {

                res.writeHead(error.statusCode);
                return res.end('Error completing tasks: ' + error.message);
            }

            res.writeHead(400);
            res.end('Error completing task: ' + error.message);
        }
    }

    async importTasks(req, res) {
        try {

            const importTasksService = new ImportTasksService(this.tasksDatabase);

            let tasksCsv = req.body;

            const tasks = await importTasksService.execute({ csv: tasksCsv });

            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify({ message: "Tasks imported successfully", tasks }));

        } catch (error) {

            if (error instanceof InvalidCsvMultiPartFormError) {

                res.writeHead(error.statusCode);
                return res.end('Error importing tasks: ' + error.message);
            }

            res.writeHead(400);
            res.end('Error importing tasks: ' + error.message);
        }
    }

}