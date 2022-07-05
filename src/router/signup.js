import { Router } from "express";
import { signUp } from "../controllers/sign-up.js";
import { signUpMiddle } from "../middlewares/sign-up.js";

const signUpRouter = Router();

signUpRouter.post("/sign-up", signUpMiddle, signUp);

export default signUpRouter;