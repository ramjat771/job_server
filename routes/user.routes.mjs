import { Router } from "express";
import * as controller from "../controller/user.controller.mjs";
const router = Router();
// 👤 Create User
router.post(
  "/",
  controller.userController
);
// 👤 Get User
router.get(
  "/:userId",
  controller.getUserController
);
// ✏️ Update User
router.patch(
  "/",
  controller.updateUserController
);
// 📍 Nearby Users
router.get(
  "/nearby/list",
  controller.nearbyUsersController
);
export default router;