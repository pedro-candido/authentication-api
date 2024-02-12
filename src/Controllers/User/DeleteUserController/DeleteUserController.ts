import { Request, Response } from "express";
import { MongoDeleteUserRepository } from "../../../Repositories/delete-user";

export const DeleteUserController = {
  async handle(req: Request, res: Response) {
    const { username } = req.params;

    const repository = new MongoDeleteUserRepository();
    await repository.deleteUser(username, res);

    return res.send(`${username} user deleted`);
  },
};
