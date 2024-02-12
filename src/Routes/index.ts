import { Router } from "express";
import { GetUserController } from "../Controllers/User/GetUserController";
import { PostUserController } from "../Controllers/User/PostUserController";
import { UpdateUserController } from "../Controllers/User/UpdateUserController/UpdateUserController";
import { DeleteUserController } from "../Controllers/User/DeleteUserController/DeleteUserController";

const routes = Router();

routes.get("/users", GetUserController.handle);

routes.post("/user", PostUserController.handle);

routes.put("/user/:username", UpdateUserController.handle);

routes.delete("/user/:username", DeleteUserController.handle);

export default routes;
