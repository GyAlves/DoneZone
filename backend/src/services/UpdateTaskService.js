
//repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";

// error-handling
import TaskNotFoundError from "../errors/task-does-not-exists-error.js";
export default class UpdateTasksService {

    #tasksRepository;

    constructor(database) {
        this.#tasksRepository = new TasksRepository(database);
        this.allowedBodyProperties = ["title", "description"];
    }

    async execute({ id, task }) {

        const tasks = await this.#tasksRepository.list({});
        const taskExists = tasks.find(task => task.id === id);

        if (!taskExists) {
            throw new TaskNotFoundError();
        }

        const filteredTask = {};

        for (const [property, value] of Object.entries(task)) {
            if (this.allowedBodyProperties.includes(property)) {
                filteredTask[property] = value;
            }
        }

        const taskUpdatePayload = {
            ...taskExists,
            ...task
        }

        const taskUpdated = this.#tasksRepository.updateOne({ id, task: taskUpdatePayload });

        return taskUpdated;

    }
}

