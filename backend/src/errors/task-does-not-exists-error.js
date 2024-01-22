class TaskNotFoundError extends Error {

    statusCode

    constructor() {
        super("Task not found");
        this.statusCode = 404;
    }
}

export default TaskNotFoundError