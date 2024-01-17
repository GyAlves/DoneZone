
// controllers 
import GetTasksController from "../controllers/tasks/get-tasks-controller.js";
import CreateTaskController from "../controllers/tasks/create-task-controller.js";
import UpdateTaskController from "../controllers/tasks/update-task-controller.js";
import RemoveTaskController from "../controllers/tasks/remove-task-controller.js";
import CompleteTaskController from "../controllers/tasks/complete-task-controller.js";
import ImportTasksController from "../controllers/tasks/import-tasks-controller.js";

const tasksRouter = [
    {
        method: "GET",
        path: "/tasks",
        handler: (req, res) => GetTasksController(req, res)
    },
    {
        method: "POST",
        path: "/task",
        handler: (req, res) => CreateTaskController(req, res)
    },
    {
        method: "PUT",
        path: "/task/:id",
        handler: (req, res) => UpdateTaskController(req, res)
    },
    {
        method: "DELETE",
        path: "/task/:id",
        handler: (req, res) => RemoveTaskController(req, res)
    },
    {
        method: "PATCH",
        path: "/task/:id",
        handler: (req, res) => CompleteTaskController(req, res)
    },
    {
        method: "POST",
        path: "/tasks/import",
        handler: (req, res) => ImportTasksController(req, res)
    }
];

export default tasksRouter;