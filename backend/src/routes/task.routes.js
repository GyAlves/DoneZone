
// controllers 
import TasksController from "../controllers/tasks/TasksController.js";

const tasksController = new TasksController();

const tasksRouter = [
    {
        method: "GET",
        path: "/tasks",
        handler: (req, res) => tasksController.listTasks(req, res)
    },
    {
        method: "POST",
        path: "/task",
        handler: (req, res) => tasksController.createTask(req, res)
    },
    {
        method: "PUT",
        path: "/task/:id",
        handler: (req, res) => tasksController.updateTaskById(req, res)
    },
    {
        method: "DELETE",
        path: "/task/:id",
        handler: (req, res) => tasksController.removeTaskById(req, res)
    },
    {
        method: "PATCH",
        path: "/task/:id/complete",
        handler: (req, res) => tasksController.completeTaskById(req, res)
    },
    {
        method: "POST",
        path: "/tasks/import",
        handler: (req, res) => tasksController.importTasks(req, res)
    }
];

export default tasksRouter;