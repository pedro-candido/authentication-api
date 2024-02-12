import { Request, Response } from "express";
import { MongoPutUserRepository } from "../../../Repositories/put-user";
import { Format } from "../../../Utils/format";

export const UpdateUserController = {
  async handle(req: Request, res: Response) {
    const phoneFormatted = Format.removeSpecialCharactersFromPhone(
      req.body.phone
    );

    const user = await MongoPutUserRepository.updateUser(req.params.username, {
      ...req.body,
      phone: phoneFormatted,
    });

    return res.json(user);
  },
};
