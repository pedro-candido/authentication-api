import { Request, Response } from "express";
import { MongoGetUsersRepository } from "../../Repositories/get-users";

export const GetUserController = {
  async handle(_: Request, res: Response) {
    const users = await MongoGetUsersRepository.getUsers();
    return res.json(users);
  },
};
