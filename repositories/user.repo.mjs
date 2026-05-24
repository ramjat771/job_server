import User from "../models/user.model.mjs";

// 👤 Get User By UserId
export const getByUserIdRepo = async (
  userId
) => {
  return await User.findOne({ userId });
};

// 📱 Get User By Mobile
export const getByMobileRepo = async (
  mobile
) => {
  return await User.findOne({ mobile });
};

// 🆕 Create User
export const createRepo = async (data) => {
  const user = new User(data);

  return await user.save();
};

// ✏️ Update User
export const updateRepo = async (
  userId,
  updateData
) => {
  return await User.findOneAndUpdate(
    { userId },
    updateData,
   {
  returnDocument: "after",
}
  );
};

// 📍 Nearby Users
export const nearbyUsersRepo = async (
  lng,
  lat,
  distance = 5000
) => {
  return await User.find({
    isActive: true,
    isBlocked: false,
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: distance,
      },
    },
  });
};