// utils
import generateUUID from "../utils/generate-uuid-util.js";

//repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";
export default class CreateTasksService {

    #tasksRepository;

    constructor(database) {
        this.#tasksRepository = new TasksRepository(database);
    }

    async execute(data) {

        const task = {
            id: generateUUID(),
            ...data,
            created_at: new Date(),
            updated_at: new Date(),
            completed_at: null
        }

        const createdTask = this.#tasksRepository.createOne({ task });

        return createdTask;

    }
} 