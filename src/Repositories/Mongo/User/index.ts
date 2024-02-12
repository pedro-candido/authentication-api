import UserModel from "../../../Models/user";

export class UserRepository {
  static async createUser(data: typeof UserModel) {
    const user = new UserModel(data);
    await user.save();

    return user;
  }

  static async getUsers() {
    const users = await UserModel.find();

    return users;
  }

  static async updateUser(username: string, data: typeof UserModel) {
    const item = await UserModel.findOne({ username });

    item?.overwrite(data).save();

    return item;
  }

  static async deleteUser(username: string) {
    const user = await UserModel.findOne({
      username,
    });

    if (!user) {
      return;
    }

    await UserModel.findByIdAndDelete(user._id);

    return;
  }
}
