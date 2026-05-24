import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // 🆔 User ID
    userId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },

    // 👤 Full Name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // 📱 Mobile Number
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // 📧 Email
    email: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },

    // 🖼️ Profile Image
    profileImage: {
      type: String,
      default: "",
    },

    // 🎭 User Role
    role: {
      type: String,
      enum: ["admin", "user", "agent"],
      default: "user",
    },

    // 🏢 Agent Company
    agencyName: {
      type: String,
      default: "",
    },

    // 🪪 Aadhaar
    aadhaarNumber: {
      type: String,
      default: "",
    },

    // 📲 Device Token
    deviceToken: {
      type: String,
      default: "",
    },

    // ⭐ Rating
    rating: {
      type: Number,
      default: 0,
    },

    // 🎁 Referral
    referralCode: {
      type: String,
      default: "",
    },

    referredBy: {
      type: String,
      default: "",
    },

    // 🟢 Active Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // 🚫 Block Status
    isBlocked: {
      type: Boolean,
      default: false,
    },

    // 🕒 Last Online
    lastOnline: {
      type: Date,
      default: Date.now,
    },

    // 🌍 Live Location
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number], // [lng, lat]
        default: [0, 0],
      },
    },
  },
  {
    timestamps: true,
  }
);

// 📍 Geo Index
userSchema.index({ location: "2dsphere" });

export default mongoose.model(
  "User",
  userSchema
);