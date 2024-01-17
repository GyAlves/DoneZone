
const tasksRouter = [
    {
        method: "GET",
        path: "/tasks",
        handler: (req, res) => {
            res.end('Tasks');
        }
    },
    {
        method: "POST",
        path: "/task",
        handler: (req, res) => {
            res.end('Task created');
        }
    },
    {
        method: "PUT",
        path: "/task/:id",
        handler: (req, res) => {
            res.end('Task updated');
        }
    },
    {
        method: "DELETE",
        path: "/task/:id",
        handler: (req, res) => {
            res.end('Task deleted');
        }
    },
    {
        method: "PATCH",
        path: "/task/:id",
        handler: (req, res) => {
            res.end('Task completed');
        }
    },
    {
        method: "POST",
        path: "/tasks/import",
        handler: (req, res) => {
            res.end('Tasks imported');
        }
    }
];

export default tasksRouter;