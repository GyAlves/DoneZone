
//repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";

// error-handling
import TaskNotFoundError from "../errors/task-does-not-exists-error.js";
export default class RemoveTasksService {

    #tasksRepository;

    constructor(database) {
        this.#tasksRepository = new TasksRepository(database);
    }

    async execute({ id }) {

        const tasks = await this.#tasksRepository.list({});
        const taskExists = tasks.find(task => task.id === id);

        if (!taskExists) {
            throw new TaskNotFoundError();
        }

        this.#tasksRepository.deleteOne({ id });

    }
} 