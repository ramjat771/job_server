import mongoose from "mongoose";

const jobApplySchema =
  new mongoose.Schema(
    {
      jobId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
      },
      

      // ✅ Device Id
      deviceId: {
        type: String,
        required: true,
      },
      

      name: {
        type: String,
        required: true,
        trim: true,
      },

      mobile: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        lowercase: true,
      },

      qualifications: {
        type: String,
        required: true,
      },

      experience: {
        type: String,
        default: "Fresher",
      },

      skills: [
        {
          type: String,
        },
      ],

      currentLocation: {
        type: String,
      },

      expectedSalary: {
        type: Number,
        default: 0,
      },

      resumeUrl: {
        type: String,
      },

      status: {
        type: String,
        enum: [
          "pending",
          "reviewed",
          "selected",
          "rejected",
        ],
        default: "pending",
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "JobApply",
  jobApplySchema
);