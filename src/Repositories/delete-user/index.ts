import { Response } from "express";
import User from "../../Models/user";
import { IDeleteUserRepository } from "./delete-user.types";

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(username: string, res: Response) {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    User.findByIdAndDelete(user._id);

    return;
  }
}
