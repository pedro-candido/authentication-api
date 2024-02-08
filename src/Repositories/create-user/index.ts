import UserModel from "../../Models/user";
import { Crypt } from "../../Utils/crypt";

export const MongoCreateUserRepository = {
  async createUser(data: typeof UserModel) {
    const user = new UserModel(data);
    await user.save();

    return user;
  },
};
