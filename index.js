import express from 'express';
import userRoutes from './src/routes/userRoutes.js';
import { config } from 'dotenv';
import pkg from 'body-parser';
import { connectToMongoDB } from './src/db.js';
const { urlencoded, json } = pkg;

config();

var app = express();

app.use(urlencoded({extended: true}));
app.use(json());

connectToMongoDB();
app.use("/api", userRoutes);


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port",process.env.PORT)
});