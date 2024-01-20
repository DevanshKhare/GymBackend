import User from "../models/userModel.js"
import bcrypt from "bcryptjs"

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
    const response = {status: false, data: {}, message: "Something went wrong"}
    try {
      const user = await User.findOne({email});
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password).then((res)=>{
          return res;
        });
        if (passwordMatch) {
           response.status = true;
           response.data.user = user;
           response.message = "Login successful"
          }
        }
        return response;
    } catch (error) {}
  },
};
export default userServices