import Job from "../models/job.model.mjs";

// Create Job
export const createJobRepo = async (data) => {
  const job = new Job(data);
  return await job.save();
};

// Get All Jobs
export const getAllJobsRepo = async () => {
  return await Job.find().sort({ createdAt: -1 });
};

// Get Single Job
export const getJobByIdRepo = async (id) => {
  return await Job.findById(id);
};

// Update Job
export const updateJobRepo = async (id, data) => {
  return await Job.findByIdAndUpdate(id, data, {
     returnDocument: "after",
  });
};

// Delete Job
export const deleteJobRepo = async (id) => {
  return await Job.findByIdAndDelete(id);
};