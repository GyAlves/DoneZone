
export default class CompleteTasksService {

    async execute(csv) {

        const tasks = [
            ...csv
        ]

        return tasks

    }
} 