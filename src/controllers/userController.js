import UserService from "../services/UserServices.js";
const userController = {
    getAllUsers: (req, res) => {
        res.send("Hello Devansh")
    },
    
    createUser: async(req, res) => {
        const { name, email, password, city, phone } = req.body;
        const newUser = await UserService.createUser(name, email, password, city, phone)
        if(newUser){
            res.status(200).send("User created successfully");
        } else {
            res.status(500).send("Something went wrong");
        }
    }
}

export default userController;