import { Request, Response } from 'express';
import TaskModel from '../models/Task';

export default class TasksController {
  public getAllTasks(req: Request, res: Response): Response {
    return res.send('olá mundo');
  }

  public getTask(req: Request, res: Response) {
    const { id } = req.params;

    return res.send(id);
  }

  public updateTask(req: Request, res: Response) {
    const { id } = req.params;

    return res.send(id);
  }

  public async createTask(req: Request, res: Response) {
    const { body } = req;
    TaskModel.create(body);
    return res.json(body);
  }

  public deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    return res.send(id);
  }
}
