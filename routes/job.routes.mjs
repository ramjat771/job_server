import { Router } from "express";

import * as controller from "../controller/job.controller.mjs";

const router = Router();

// Create Job
router.post("/", controller.createJobController);

// Get All Jobs
router.get("/", controller.getAllJobsController);

// Get Single Job
router.get("/:id", controller.getSingleJobController);

// Update Job
router.put("/:id", controller.updateJobController);

// Delete Job
router.delete("/:id", controller.deleteJobController);

export default router;