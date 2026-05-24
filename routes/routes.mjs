import { Router } from "express";
import payment from "./payment.routes.mjs"
import job from "./job.routes.mjs"
import jobApply from "./jobApply.routes.mjs"
import user from "./user.routes.mjs"
const router = Router();
router.use("/payment", payment)
router.use("/job", job)
router.use("/jobApply", jobApply)
router.use("/user", user);
export default router;