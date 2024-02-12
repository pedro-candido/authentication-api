import UserModel from "../../Models/user";

export const MongoPutUserRepository = {
  async updateUser(username: string, data: typeof UserModel) {
    const item = await UserModel.findOne({ username });

    item?.overwrite(data).save();

    return item;
  },
};
