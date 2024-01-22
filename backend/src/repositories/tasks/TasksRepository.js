
export default class TasksRepository {

    constructor(database) {
        this.table = "tasks";
        this.database = database;
    }

    async list({ table = this.table, search }) {

        const tasks = this.database.select(table, search);

        return tasks;
    }

    async createOne({ table = this.table, task }) {

        const taskCreated = this.database.insert(table, task);

        return taskCreated;

    }

    async updateOne({ table = this.table, id, task }) {

        const taskUpdated = this.database.update(table, id, task);

        return taskUpdated;
    }

    // async listOne({ table = this.table, id }) {

    //     const task = this.database.select(table, { id });

    //     return task;

    // }

    async deleteOne({ table = this.table, id }) {

        this.database.delete(table, id);

    }

}