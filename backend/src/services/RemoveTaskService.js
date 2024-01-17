
export default class RemoveTasksService {

    async execute(id) {

        let tasks = [
            {
                id: 1,
                name: "Study business",
                description: "Study business description"
            }
        ]

        tasks = tasks.filter(task => task.id !== id)

        return tasks;

    }
} 