import asyncWrapper from 'async-wrapper-express-ts';
import { Router } from 'express';
import TasksController from '../src/controller/tasksController';

const router = Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = new TasksController();

router.route('/').get(getAllTasks).post(asyncWrapper(createTask));
router.route('/:id').get(asyncWrapper(getTask)).patch(updateTask).delete(deleteTask);

export default router;
