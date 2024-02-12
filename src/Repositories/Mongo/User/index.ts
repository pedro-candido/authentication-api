import { Response } from "express";
import UserModel from "../../../Models/user";

interface IUserRepository {
  createUser: (data: typeof UserModel) => void;
  getUsers: () => Promise<(typeof UserModel)[]>;
  updateUser: (username: string, data: typeof UserModel, res: Response) => void;
  deleteUser: (username: string) => Promise<boolean>;
}

export class UserRepository implements IUserRepository {
  async createUser(data: typeof UserModel) {
    const user = new UserModel(data);
    await user.save();

    return user;
  }

  async getUsers() {
    const users: (typeof UserModel)[] = await UserModel.find();

    return users;
  }

  async updateUser(username: string, data: typeof UserModel, res: Response) {
    const item = await UserModel.findOne({ username });

    if (!item) {
      res.status(404).send("User not found");
      return;
    }

    item?.overwrite(data).save();
    res.status(200).send("User updated");

    return;
  }

  async deleteUser(username: string) {
    const user = await UserModel.findOne({
      username,
    });

    if (!!user) {
      await UserModel.findByIdAndDelete(user._id);
      return true;
    }

    return false;
  }
}
