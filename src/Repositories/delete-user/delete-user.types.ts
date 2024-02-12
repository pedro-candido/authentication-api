import { Response } from "express";

export interface IDeleteUserRepository {
  deleteUser(username: string, res: Response): Promise<void>;
}
