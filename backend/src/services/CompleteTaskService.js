
//repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";

export default class CompleteTasksService {

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

        taskExists.completed_at = new Date();

        const taskUpdated = this.#tasksRepository.updateOne(
            {
                id,
                task: taskExists
            });

        return taskUpdated;

    }
} 