"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoGetUsersRepository = void 0;
const user_1 = __importDefault(require("../../Models/user"));
exports.MongoGetUsersRepository = {
    getUser() {
        return user_1.default.find();
    },
};
//# sourceMappingURL=index.js.map