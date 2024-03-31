import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const routes = express.Router();

routes.get("/:id",protectRoute ,getMessages);
routes.post("/send/:id",protectRoute ,sendMessage);

export default routes;