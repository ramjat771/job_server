import * as service from "../services/job.service.mjs";
import {
  successResponse,
  errorResponse,
} from "../utils/api_response.mjs";

// Create Job
export const createJobController = async (req, res, next) => {
  try {
    const job = await service.createJob(req.body);

    return successResponse(
      res,
      job,
      "Job created successfully"
    );
  } catch (err) {
    next(err);
  }
};

// Get All Jobs
export const getAllJobsController = async (
  req,
  res,
  next
) => {
  try {
    const jobs = await service.getAllJobs();

    return successResponse(
      res,
      jobs,
      "Jobs fetched successfully"
    );
  } catch (err) {
    next(err);
  }
};

// Get Single Job
export const getSingleJobController = async (
  req,
  res,
  next
) => {
  try {
    const job = await service.getSingleJob(req.params.id);

    if (!job) {
      return errorResponse(
        res,
        "Job not found",
        404
      );
    }

    return successResponse(
      res,
      job,
      "Job fetched successfully"
    );
  } catch (err) {
    next(err);
  }
};

// Update Job
export const updateJobController = async (
  req,
  res,
  next
) => {
  try {
    const job = await service.updateJob(
      req.params.id,
      req.body
    );

    if (!job) {
      return errorResponse(
        res,
        "Job not found",
        404
      );
    }

    return successResponse(
      res,
      job,
      "Job updated successfully"
    );
  } catch (err) {
    next(err);
  }
};

// Delete Job
export const deleteJobController = async (
  req,
  res,
  next
) => {
  try {
    const job = await service.deleteJob(req.params.id);

    if (!job) {
      return errorResponse(
        res,
        "Job not found",
        404
      );
    }

    return successResponse(
      res,
      job,
      "Job deleted successfully"
    );
  } catch (err) {
    next(err);
  }
};