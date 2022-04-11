"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TasksController {
    getAllTasks(req, res) {
        return res.send('olá mundo');
    }
    getTask(req, res) {
        const { id } = req.params;
        return res.send(id);
    }
    updateTask(req, res) {
        const { id } = req.params;
        return res.send(id);
    }
    createTask(req, res) {
        return res.json(req.body);
    }
    deleteTask(req, res) {
        const { id } = req.params;
        return res.send(id);
    }
}
exports.default = TasksController;
//# sourceMappingURL=tasksController.js.map