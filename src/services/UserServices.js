import User from "../models/userModel.js"

const userServices = {
    createUser: async(name, email, password, city, phone) => {
        try {
            const response = await User.create({name, email, password, city, phone});
            return response;
        }catch (err) {
            console.log("Error creating user", err)
        }
    }
}
export default userServices