"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_schema_1 = __importDefault(require("../Schemas/user-schema"));
const Model = mongoose_1.default.model("User", user_schema_1.default);
exports.default = Model;
//# sourceMappingURL=user.js.map