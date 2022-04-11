"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = __importDefault(require("../src/controller/tasksController"));
const router = (0, express_1.Router)();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = new tasksController_1.default();
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
exports.default = router;
//# sourceMappingURL=tasks.js.map