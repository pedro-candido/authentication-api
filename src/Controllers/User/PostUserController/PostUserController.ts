import { Request, Response } from "express";
import { MongoCreateUserRepository } from "../../../Repositories/create-user";
import { Format } from "../../../Utils/format";

export const PostUserController = {
  async handle(req: Request, res: Response) {
    const phoneFormatted = Format.removeSpecialCharactersFromPhone(
      req.body.phone
    );

    const user = await MongoCreateUserRepository.createUser({
      ...req.body,
      phone: phoneFormatted,
    });

    return res.json(user);
  },
};
