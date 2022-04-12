import { Request, Response } from 'express';
import TaskModel, { Task } from '../models/Task';
import { Document } from 'mongoose';
import MongoDBOperationError from '../exceptions/MongoDBOperationError';

// TODO: add a class with private method
export default class TasksController {
  public getAllTasks = async (req: Request, res: Response) => {
    const tasks = await TaskModel.find();

    return res.json({ tasks });
  };

  getTask = async (req: Request, res: Response) => {
    const {
      params: { id: taskID },
    } = req;
    const task = await this.findTaskById(taskID);

    return res.json({ task });
  };

  updateTask = async (req: Request, res: Response) => {
    const {
      body,
      params: { id: taskID },
    } = req;
    const task = await this.findTaskById(taskID);
    const newTask = await task.updateOne(body, {
      new: true,
      runValidators: true,
    });

    return res.json({ newTask });
  };

  public createTask = async (req: Request, res: Response) => {
    const { body } = req;
    const task = await TaskModel.create(body);
    return res.status(200).json(task);
  };

  public async deleteTask(req: Request, res: Response) {
    const {
      params: { id },
    } = req;
    const task = await this.findTaskById(id);
    const removedTask = await task.delete();

    return res.json({ removedTask });
  }

  private async findTaskById(taskId: string): Promise<Document<unknown, any, Task>> {
    const task = await TaskModel.findOne({ _id: taskId });
    if (!task) {
      throw new MongoDBOperationError(`task not found with id: ${taskId}`);
    }

    return task;
  }
}
