
//dependencies
import { parse } from 'csv-parse';

//repository
import TasksRepository from "../repositories/tasks/TasksRepository.js";

// error-handling
import InvalidCsvMultiPartFormError from "../errors/invalid-csv-multi-part-form-error.js";

// utils
import generateUUID from "../utils/generate-uuid-util.js";

export default class CompleteTasksService {

    #tasksRepository;

    constructor(database) {
        this.#tasksRepository = new TasksRepository(database);
    }

    async execute({ csv }) {

        const lines = csv.split('\n');

        let csvStartIndex = lines.findIndex((line) => line.startsWith('title,'));

        if (csvStartIndex === -1) {
            throw new InvalidCsvMultiPartFormError();
        }

        csvStartIndex += 1;

        const csvData = lines.slice(csvStartIndex).join('\n');

        const parser = parse(csvData, { delimiter: ',' });

        for await (const record of parser) {

            const [title, description] = record;

            const task = {
                id: generateUUID(),
                title,
                description,
                created_at: new Date(),
                updated_at: new Date(),
                completed_at: null
            }

            this.#tasksRepository.createOne({ task });
        }

    }
} 