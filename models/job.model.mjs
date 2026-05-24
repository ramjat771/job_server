import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    JobPosterId: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    experience: {
      type: String,
      default: "Fresher",
    },

    jobType: {
      type: String,
      enum: [
        "Full-Time",
        "Part-Time",
        "Remote",
        "Internship",
      ],
      default: "Full-Time",
    },

    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);