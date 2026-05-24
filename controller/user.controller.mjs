import * as service from "../services/user.service.mjs";
import jwt from "jsonwebtoken";
import {
  successResponse,
  errorResponse,
} from "../utils/api_response.mjs";
// 👤 Create OR Return User
export const userController = async (
  req,
  res,
  next
) => {
  try {
    const result =
      await service.handleUser(req.body);

    if (result.error) {
      return errorResponse(
        res,
        result.message,
        400,
        null
      );
    }
    // JWT Generate
    const token = jwt.sign(
      {
        userId: result.user._id,
        mobile:
          result.user.mobile,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "70d",
      }
    );
    return successResponse(
      res,
      {
        user: result.user,
        token,
      },
      result.alreadyExists
        ? "User already exists"
        : "User created"
    );
  } catch (err) {
    next(err);
  }
};
// 👤 Get User
export const getUserController = async (
  req,
  res,
  next
) => {
  try {
    const data = await service.getUser(
      req.params.userId
    );

    if (!data) {
      return errorResponse(
        res,
        "User not found",
        404
      );
    }

    return successResponse(
      res,
      data,
      "User fetched"
    );
  } catch (err) {
    next(err);
  }
};

// ✏️ Update User
export const updateUserController =
  async (req, res, next) => {
    try {
      const result =
        await service.updateUser(
          req.body
        );

      if (result.error) {
        return errorResponse(
          res,
          result.message,
          400,
          null
        );
      }
      return successResponse(
        res,
        result.user,
        "User updated"
      );
    } catch (err) {
      next(err);
    }
  };
// 📍 Nearby Users
export const nearbyUsersController =
  async (req, res, next) => {
    try {
      const { lat, lng, distance } =
        req.query;
      const data =
        await service.nearbyUsers(
          Number(lat),
          Number(lng),
          Number(distance || 5000)
        );
      return successResponse(
        res,
        data,
        "Nearby users fetched"
      );
    } catch (err) {
      next(err);
    }
  };