import { Router } from "express";
import { authrequire } from "../middlewares/validateToken.js";
import {
  login,
  logout,
  register,
  profile,
} from "../controllers/auth.controller.js";

import { validateschema } from "../middlewares/validator.middleware.js";
import { loginschema, registerschema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateschema(registerschema), register);

router.post("/login", validateschema(loginschema), login);

router.post("/logout", logout);

router.get("/profile", authrequire, profile);

export default router;
