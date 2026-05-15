import { Router } from "express";

import * as controller from "../controller/jobApply.controller.mjs";

const router = Router();


// ✅ Apply Job
router.post(
  "/",
  controller.applyJobController
);


// ✅ Get All Applications
router.get(
  "/",
  controller.getAllApplicationsController
);


// ✅ Get Applied Jobs By Device Id
router.get(
  "/device/:deviceId",
  controller.getAppliedJobsByDeviceController
);


// ✅ Get Single Application
router.get(
  "/:id",
  controller.getSingleApplicationController
);


// ✅ Update Application
router.patch(
  "/:updateId",
  controller.updateApplicationController
);

export default router;