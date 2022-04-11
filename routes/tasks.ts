import { Router } from 'express';
import TasksController from '../src/controller/tasksController';

const router = Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = new TasksController();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;
