
export default class UpdateTasksService {

    async execute(name, description, id) {

        const task = {
            "name": "Study business",
            "description": "Study business description"
        }

        task.id = id
        task.name = name
        task.description = description

        return task;

    }
} 