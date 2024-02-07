"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./Database/connection");
const app_1 = __importDefault(require("./app"));
(0, connection_1.db_connect)();
app_1.default.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map