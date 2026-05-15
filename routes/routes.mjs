import { Router } from "express";
import payment from "./payment.routes.mjs"
import job from "./job.routes.mjs"
import jobApply from "./jobApply.routes.mjs"
const router = Router();
router.use("/payment", payment)
router.use("/job", job)
router.use("/jobApply", jobApply)
export default router;