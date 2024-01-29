import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userServices = {
  getAllUsers: async () => {
    try {
      const response = await User.find().select("name email phone city");
      return response;
    } catch (err) {
      console.log("Error while fetching users");
    }
  },

  createUser: async (firstName, lastName, email, password, city, phone) => {
    try {
      const response = await User.create({
        firstName,
        lastName,
        email,
        password,
        city,
        phone,
      });
      return response;
    } catch (err) {
      console.log("Error creating user", err);
    }
  },

  userLogin: async (email, password) => {
    const response = {
      status: false,
      user: null,
      message: "Login failed. Please check your credentials.",
    };

    try {
      const user = await User.findOne({ email });

      if (!user) {
        response.message = "User not found. Please check your email.";
      } else {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          response.status = true;
          response.user = user;
          response.message = "Login successful";
        } else {
          response.message = "Incorrect password. Please try again.";
        }
      }

      return response;
    } catch (error) {
      console.error("Error during login:", error);
      response.message = "Something went wrong. Please try again later.";
      return response;
    }
  },
};
export default userServices;
