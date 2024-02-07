"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetUserController_1 = require("../Controllers/GetUserController/GetUserController");
const routes = (0, express_1.Router)();
routes.get("/users", GetUserController_1.GetUserController.handle);
exports.default = routes;
//# sourceMappingURL=index.js.map