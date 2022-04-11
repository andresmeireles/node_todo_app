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
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            Task_1.default.create(body);
            return res.json(body);
        });
    }
    deleteTask(req, res) {
        const { id } = req.params;
        return res.send(id);
    }
}
exports.default = TasksController;
//# sourceMappingURL=tasksController.js.map