import mongoose from 'mongoose';
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10,
        unique: true,
    },
})

userSchema.pre("save", async function(next){
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model('User', userSchema);
export default User;