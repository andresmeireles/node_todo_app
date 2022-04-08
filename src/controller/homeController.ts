import { Request, Response } from "express";

export default class HomeController {
    public index(req: Request, res: Response): Response {
        return res.send('olá mundo');
    }
}