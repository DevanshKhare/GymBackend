import UserService from "../services/UserServices.js";
const userController = {
  getAllUsers: async (req, res) => {
    const users = await UserService.getAllUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500).send("Something went wrong");
    }
  },

  createUser: async (req, res) => {
    const { firstName, lastName, email, password, city, phone } = req.body;
    const newUser = await UserService.createUser(
      firstName,
      lastName,
      email,
      password,
      city,
      phone
    );
    if (newUser) {
      res.status(201).send("User created successfully");
    } else {
      res.status(500).send("Something went wrong");
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserService.userLogin(email, password);
      if (user && user.status) {
        res.status(200).send(user);
      } else {
        res.status(401).send({ message: user.message });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res
        .status(500)
        .send({ message: "Something went wrong. Please try again later." });
    }
  },
};

export default userController;
