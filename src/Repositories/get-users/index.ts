import UserModel from "../../Models/user";

export const MongoGetUsersRepository = {
  getUser() {
    return UserModel.find();
  },
};
