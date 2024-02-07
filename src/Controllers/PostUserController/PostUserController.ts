import { Request, Response } from "express";
import { MongoCreateUserRepository } from "../../Repositories/create-user";
import { Crypt } from "../../Utils/crypt";

export const PostUserController = {
  async handle(req: Request, res: Response) {
    const {
      body: { password },
    } = req;
    const cript = new Crypt();
    const newPassword = await cript.cryptPassword(password);

    const user = await MongoCreateUserRepository.createUser({
      password: newPassword,
      ...req.body,
    });

    return res.json(user);
  },
};
