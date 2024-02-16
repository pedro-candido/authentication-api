import { Router } from "express";
import { UserController } from "../Controllers/UserController";

const routes = Router();

const User = new UserController();

routes.get("/users", User.get);

routes.post("/user", User.create);
routes.post("/login", User.login);

routes.put("/user/:username", User.update);

routes.delete("/user/:username", User.delete);

export default routes;
