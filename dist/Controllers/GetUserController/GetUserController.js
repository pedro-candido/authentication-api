"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
const get_users_1 = require("../../Repositories/get-users");
exports.GetUserController = {
    async handle(_, res) {
        const users = await get_users_1.MongoGetUsersRepository.getUser();
        return res.json(users);
    },
};
//# sourceMappingURL=GetUserController.js.map