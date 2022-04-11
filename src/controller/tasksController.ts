import { Request, Response } from 'express';
import TaskModel, { Task } from '../models/Task';
import { Document } from 'mongoose';

export default class TasksController {
  public async getAllTasks(req: Request, res: Response): Promise<Response> {
    const tasks = await TaskModel.find();

    return res.json({ tasks });
  }

  getTask = async (req: Request, res: Response) => {
    const {
      params: { id: taskID },
    } = req;
    const task = await this.findTaskById(taskID);

    return res.json({ task });
  };

  updateTask = async (req: Request, res: Response): Promise<Response> => {
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

  public async createTask(req: Request, res: Response) {
    try {
      const { body } = req;
      const task = await TaskModel.create(body);
      return res.status(200).json(task);
    } catch (error) {
      const err = error as Error;
      return res.send(err.message);
    }
  }

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
      throw new Error(`task not found with id: ${taskId}`);
    }

    return task;
  }
}
