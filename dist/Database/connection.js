"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_connect = void 0;
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const db_connect = async () => { var _a; return await mongoose_1.default.connect((_a = process.env.MONGO_DB_URI) !== null && _a !== void 0 ? _a : ""); };
exports.db_connect = db_connect;
//# sourceMappingURL=connection.js.map