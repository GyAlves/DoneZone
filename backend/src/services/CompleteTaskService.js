
export default class CompleteTasksService {

    async execute(id) {

        let tasks = [
            {
                id: 1,
                name: "Study business",
                description: "Study business description"
            }
        ]

        const task = tasks.find(task => task.id === id)

        task.created_at = new Date()

        return task;

    }
} 