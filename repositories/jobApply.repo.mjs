import JobApply from "../models/jobApply.model.mjs";


// ✅ Apply Job
export const applyJobRepo =
  async (data) => {

    const apply =
      new JobApply(data);

    return await apply.save();
  };


// ✅ Get All Applications
export const getAllApplicationsRepo =
  async () => {

    return await JobApply.find()
      .sort({ createdAt: -1 });
  };


// ✅ Get Single Application
export const getSingleApplicationRepo =
  async (id) => {

    return await JobApply.findById(id)
  };


// ✅ Update Application
export const updateApplicationRepo =
  async (id, data) => {

    return await JobApply.findByIdAndUpdate(
      id,
      data,
      {
        returnDocument: "after",
        runValidators: true,
      }
    )
  };


// ✅ Get Applied Jobs By Device Id
export const getAppliedJobsByDeviceRepo =
  async (deviceId) => {

    return await JobApply.find({
      deviceId: deviceId,
    })
      .sort({ createdAt: -1 });
  };


// ✅ Check Already Applied
export const checkAlreadyAppliedRepo =
  async (
    jobId,
    deviceId
  ) => {

    return await JobApply.findOne({
      jobId,
      deviceId,
    });
  };