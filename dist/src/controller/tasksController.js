"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
class TasksController {
    constructor() {
        this.getTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { params: { id: taskID }, } = req;
            const task = yield this.findTaskById(taskID);
            return res.json({ task });
        });
        this.updateTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body, params: { id: taskID }, } = req;
            const task = yield this.findTaskById(taskID);
            const newTask = yield task.updateOne(body, {
                new: true,
                runValidators: true,
            });
            return res.json({ newTask });
        });
    }
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield Task_1.default.find();
            return res.json({ tasks });
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const task = yield Task_1.default.create(body);
                return res.status(200).json(task);
            }
            catch (error) {
                const err = error;
                return res.send(err.message);
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { id }, } = req;
            const task = yield this.findTaskById(id);
            const removedTask = yield task.delete();
            return res.json({ removedTask });
        });
    }
    findTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield Task_1.default.findOne({ _id: taskId });
            if (!task) {
                throw new Error(`task not found with id: ${taskId}`);
            }
            return task;
        });
    }
}
exports.default = TasksController;
//# sourceMappingURL=tasksController.js.map