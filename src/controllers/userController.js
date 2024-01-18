import UserService from "../services/UserServices.js";
const userController = {
    getAllUsers: async(req, res) => {
        const users = await UserService.getAllUsers();
        if(users){
            res.status(200).json(users);
        } else{
            res.status(500).send("Something went wrong");
        }
    },
    
    createUser: async(req, res) => {
        const { name, email, password, city, phone } = req.body;
        const newUser = await UserService.createUser(name, email, password, city, phone)
        if(newUser){
            res.status(201).send("User created successfully");
        } else {
            res.status(500).send("Something went wrong");
        }
    }
}

export default userController;