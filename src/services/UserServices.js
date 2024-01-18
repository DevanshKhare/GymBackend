import User from "../models/userModel.js"

const userServices = {
    getAllUsers: async () => {
        try{
            const response = await User.find().select('name email phone city')
            return response;
        }catch(err){
            console.log("Error while fetching users");
        }
    },
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