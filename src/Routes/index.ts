import { Router } from "express";
import { GetUserController } from "../Controllers/GetUserController/GetUserController";
import { PostUserController } from "../Controllers/PostUserController/PostUserController";

const routes = Router();

routes.get("/users", GetUserController.handle);

routes.post("/user", PostUserController.handle);

export default routes;
