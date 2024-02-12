import { Request, Response } from "express";
import { Format } from "../../Utils/format";
import { UserRepository } from "../../Repositories/Mongo/User";

export const UserController = {
  async update(req: Request, res: Response) {
    const phoneFormatted = Format.removeSpecialCharactersFromPhone(
      req.body.phone
    );

    const user = await UserRepository.updateUser(req.params.username, {
      ...req.body,
      phone: phoneFormatted,
    });

    return res.json(user);
  },
  async delete(req: Request, res: Response) {
    const { username } = req.params;

    await UserRepository.deleteUser(username);

    return res.status(200).send(`${username} user deleted`);
  },
  async get(_: Request, res: Response) {
    const users = await UserRepository.getUsers();

    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const phoneFormatted = Format.removeSpecialCharactersFromPhone(
      req.body.phone
    );

    const user = await UserRepository.createUser({
      ...req.body,
      phone: phoneFormatted,
    });

    return res.status(200).json({ success: true, user });
  },
};
