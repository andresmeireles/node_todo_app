import { NextFunction, Request, Response } from 'express';

export default abstract class Controller {
  protected asyncRequest(fn: CallableFunction) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return fn(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  }
}
