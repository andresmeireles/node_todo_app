"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_wrapper_express_ts_1 = __importDefault(require("async-wrapper-express-ts"));
const express_1 = require("express");
const tasksController_1 = __importDefault(require("../src/controller/tasksController"));
const router = (0, express_1.Router)();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = new tasksController_1.default();
router.route('/').get(getAllTasks).post((0, async_wrapper_express_ts_1.default)(createTask));
router.route('/:id').get((0, async_wrapper_express_ts_1.default)(getTask)).patch(updateTask).delete(deleteTask);
exports.default = router;
//# sourceMappingURL=tasks.js.map