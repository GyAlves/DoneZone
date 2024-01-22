
//repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";
export default class RemoveTasksService {

    #tasksRepository;

    constructor(database) {
        this.#tasksRepository = new TasksRepository(database);
    }

    async execute({ id }) {

        const tasks = await this.#tasksRepository.list({});
        const taskExists = tasks.find(task => task.id === id);

        if (!taskExists) {
            throw new Error("Task not found");
        }

        this.#tasksRepository.deleteOne({ id });

    }
} 