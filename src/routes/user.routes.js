import { Router } from "express";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
  getUsers,
  authUser,
} from "../controller/user.controller.js";

const router = Router();
router.get("/users", getUsers);
router.get("/user", getUser);
router.post("/user", postUser);
router.put("/user", putUser);
router.delete("/user", deleteUser);
router.post("/auth", authUser);

export default router;
