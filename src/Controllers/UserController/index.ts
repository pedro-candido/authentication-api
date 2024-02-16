import { Request, Response } from "express";
import { Format } from "../../Utils/format";
import { UserRepository } from "../../Repositories/Mongo/User";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../../Utils/error";
import { compare } from "bcrypt";

import jwt from "jsonwebtoken";

const repository = new UserRepository();

export class UserController {
  async update(req: Request, res: Response) {
    const phoneFormatted = Format.removeSpecialCharactersFromPhone(
      req.body.phone
    );

    const user = await repository.updateUser(
      req.params.username,
      {
        ...req.body,
        phone: phoneFormatted,
      },
      res
    );

    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { username } = req.params;

    const userWasDeleted = await repository.deleteUser(username);

    console.warn(userWasDeleted);

    if (userWasDeleted) {
      return res.status(200).json({ success: true, message: "User deleted" });
    }

    if (!userWasDeleted) {
      return res
        .status(400)
        .json({ success: false, message: "User dont exists" });
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }

  async get(_: Request, res: Response) {
    const users = await repository.getUsers();

    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const phoneFormatted = Format.removeSpecialCharactersFromPhone(
      req.body.phone
    );

    const user = await repository.createUser({
      ...req.body,
      phone: phoneFormatted,
    });

    return res.status(200).json({ success: true, user });
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await repository.findUser("username", username);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const isPasswordValid = compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedError("Incorrect password");
    }

    const token = jwt.sign({ id: username }, process.env.JWT_HASH ?? "", {
      expiresIn: 8,
    });

    return res.json({ success: true, access_token: token });
  }
}
