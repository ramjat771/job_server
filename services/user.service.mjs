import * as repo from "../repositories/user.repo.mjs";
// 👤 Create OR Return Existing User
export const handleUser = async ({
  userId,
  name,
  mobile,
  email,
  profileImage,
  role,
  agencyName,
  aadhaarNumber,
  deviceToken,
  referralCode,
  referredBy,
  isActive,
  lat,
  lng,
}) => {
  // 🔍 Check existing user
  let user =
    await repo.getByUserIdRepo(userId);

  // 📱 Check mobile
  if (!user) {
    user =
      await repo.getByMobileRepo(mobile);
  }

  // ✅ Return existing user
  if (user) {
    return {
      success: true,
      alreadyExists: true,
      user,
    };
  }

  // 🆕 Create user
  user = await repo.createRepo({
    userId,
    name,
    mobile,
    email,
    profileImage,

    role: role || "user",

    agencyName,
    aadhaarNumber,

    deviceToken,

    referralCode,
    referredBy,

    isActive:
      isActive !== undefined
        ? isActive
        : true,

    location: {
      type: "Point",

      coordinates: [lng || 0, lat || 0],
    },
  });

  return {
    success: true,
    alreadyExists: false,
    user,
  };
};

// 👤 Get User
export const getUser = async (
  userId
) => {
  return await repo.getByUserIdRepo(
    userId
  );
};

// ✏️ Update User
export const updateUser = async ({
  userId,
  ...rest
}) => {
  const user =
    await repo.getByUserIdRepo(userId);

  if (!user) {
    return {
      error: true,
      message: "User not found",
    };
  }

  // 📍 Update location
  if (
    rest.lat !== undefined &&
    rest.lng !== undefined
  ) {
    rest.location = {
      type: "Point",

      coordinates: [rest.lng, rest.lat],
    };

    delete rest.lat;
    delete rest.lng;
  }

  // 🕒 Update online time
  rest.lastOnline = new Date();

  const updated = await repo.updateRepo(
    userId,
    rest
  );

  return {
    success: true,
    user: updated,
  };
};
// 📍 Nearby Users
export const nearbyUsers = async (
  lat,
  lng,
  distance
) => {
  return await repo.nearbyUsersRepo(
    lng,
    lat,
    distance
  );
};