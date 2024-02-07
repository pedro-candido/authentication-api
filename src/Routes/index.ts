import { Router } from "express";
import { GetUserController } from "../Controllers/GetUserController/GetUserController";

const routes = Router();

routes.get("/users", GetUserController.handle);

export default routes;
