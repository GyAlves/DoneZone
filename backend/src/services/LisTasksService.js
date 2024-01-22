// repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";
export default class ListTasksService {

    #tasksRepository;

    constructor(database) {
        this.#tasksRepository = new TasksRepository(database);
    }

    async execute({ searchQuery }) {

        const hasSearchParams = Object.getOwnPropertyNames(searchQuery).length > 0
            ? searchQuery
            : null;

        const tasks = this.#tasksRepository.list({ search: hasSearchParams });
        return tasks;

    }
} 