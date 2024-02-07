import UserModel from "../../Models/user";

export const MongoGetUsersRepository = {
  getUsers() {
    return UserModel.find();
  },
};
