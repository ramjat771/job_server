import * as repo from "../repositories/jobApply.repo.mjs";

import Job from "../models/job.model.mjs";

import JobApply from "../models/jobApply.model.mjs";

import mongoose from "mongoose";


// ✅ Apply Job
export const applyJob =
  async (body) => {

    // ✅ Check Valid Job Id
    if (
      !mongoose.Types.ObjectId.isValid(
        body.jobId
      )
    ) {

      return {
        error: true,
        message:
          "Invalid Job Id",
      };
    }

    // ✅ Check Job Exists
    const job =
      await Job.findById(
        body.jobId
      );

    if (!job) {

      return {
        error: true,
        message:
          "Job not found",
      };
    }

    // ✅ Check Existing Application
    const alreadyApplied =
      await JobApply.findOne({
        jobId: body.jobId,
        deviceId:
          body.deviceId,
      });

    // ✅ Update Existing Application
    if (alreadyApplied) {

      const updatedApplication =
        await repo.updateApplicationRepo(
          alreadyApplied._id,
          body
        );

      return {
        success: true,
        message:
          "Application updated successfully",
        data: updatedApplication,
      };
    }

    // ✅ Create New Application
    const application =
      await repo.applyJobRepo(
        body
      );

    return {
      success: true,
      message:
        "Job applied successfully",
      data: application,
    };
  };


// ✅ Get All Applications
export const getAllApplications =
  async () => {

    return await repo.getAllApplicationsRepo();
  };


// ✅ Get Single Application
export const getSingleApplication =
  async (id) => {

    return await repo.getSingleApplicationRepo(
      id
    );
  };


// ✅ Update Application
export const updateApplication =
  async (
    updateId,
    body
  ) => {

    const updateData = {
      name: body.name,
      mobile: body.mobile,
      email: body.email,
      qualifications:
        body.qualifications,
      experience:
        body.experience,
      skills: body.skills,
      currentLocation:
        body.currentLocation,
      expectedSalary:
        body.expectedSalary,
      resumeUrl:
        body.resumeUrl,
      status: body.status,
    };

    return await repo.updateApplicationRepo(
      updateId,
      updateData
    );
  };


// ✅ Get Applied Jobs By Device Id
export const getAppliedJobsByDevice =
  async (deviceId) => {

    return await repo.getAppliedJobsByDeviceRepo(
      deviceId
    );
  };