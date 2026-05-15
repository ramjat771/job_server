import * as service from "../services/jobApply.service.mjs";

import {
  successResponse,
  errorResponse,
} from "../utils/api_response.mjs";


// ✅ Apply Job
export const applyJobController =
  async (
    req,
    res,
    next
  ) => {

    try {

      const result =
        await service.applyJob(
          req.body
        );

      // ❌ Error
      if (result.error) {

        console.error(
          "Error applying for job:",
          result.message
        );

        return errorResponse(
          res,
          result.message,
          404
        );
      }

      // ✅ Success
      return successResponse(
        res,
        result.data,
        "Job applied successfully"
      );

    } catch (err) {

      next(err);
    }
  };


// ✅ Get All Applications
export const getAllApplicationsController =
  async (
    req,
    res,
    next
  ) => {

    try {

      const data =
        await service.getAllApplications();

      return successResponse(
        res,
        data,
        "Applications fetched successfully"
      );

    } catch (err) {

      next(err);
    }
  };


// ✅ Get Single Application
export const getSingleApplicationController =
  async (
    req,
    res,
    next
  ) => {

    try {

      const data =
        await service.getSingleApplication(
          req.params.id
        );

      // ❌ Not Found
      if (!data) {

        return errorResponse(
          res,
          "Application not found",
          404
        );
      }

      // ✅ Success
      return successResponse(
        res,
        data,
        "Application fetched successfully"
      );

    } catch (err) {

      next(err);
    }
  };


// ✅ Update Application
export const updateApplicationController =
  async (
    req,
    res,
    next
  ) => {

    try {

      const updateId =
        req.params.updateId;

      const data =
        await service.updateApplication(
          updateId,
          req.body
        );

      // ❌ Not Found
      if (!data) {

        return errorResponse(
          res,
          "Application not found",
          404
        );
      }

      // ✅ Success
      return successResponse(
        res,
        data,
        "Application updated successfully"
      );

    } catch (err) {

      next(err);
    }
  };


// ✅ Get Applied Jobs By Device Id
export const getAppliedJobsByDeviceController =
  async (
    req,
    res,
    next
  ) => {

    try {

      const deviceId =
        req.params.deviceId;

      const data =
        await service.getAppliedJobsByDevice(
          deviceId
        );

      return successResponse(
        res,
        data,
        "Applied jobs fetched successfully"
      );

    } catch (err) {

      next(err);
    }
  };