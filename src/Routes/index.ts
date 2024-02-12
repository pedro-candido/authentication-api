import { Router } from "express";
import { UserController } from "../Controllers/UserController";

const routes = Router();

routes.get("/users", UserController.get);

routes.post("/user", UserController.create);

routes.put("/user/:username", UserController.update);

routes.delete("/user/:username", UserController.delete);

export default routes;
