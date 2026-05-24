import * as repo from "../repositories/job.repo.mjs";

// Create Job
export const createJob = async (body) => {
  return await repo.createJobRepo(body);
};

// Get All Jobs
export const getAllJobs = async () => {
  return await repo.getAllJobsRepo();
};

// Get Single Job
export const getSingleJob = async (id) => {
  return await repo.getJobByIdRepo(id);
};

// Get Jobs By JobPosterId
export const getJobsByJobPosterId =
  async (JobPosterId) => {
    return await repo.getJobsByJobPosterIdRepo(
      JobPosterId
    );
  };

// Update Job
export const updateJob = async (
  id,
  body
) => {
  return await repo.updateJobRepo(id, body);
};

// Delete Job
export const deleteJob = async (id) => {
  return await repo.deleteJobRepo(id);
};