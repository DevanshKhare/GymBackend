import express from 'express';
import userRoutes from './src/routes/userRoutes.js';
import { config } from 'dotenv';
import pkg from 'body-parser';
import { connectToMongoDB } from './src/db.js';
import cors from "cors"
const { urlencoded, json } = pkg;

config();

var app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(urlencoded({extended: true}));
app.use(json());

connectToMongoDB();

app.get('/', function(req, res){
    res.send({messsage:"Api is running", status:200});
})

app.use("/api/auth", userRoutes);


app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port",process.env.PORT)
});