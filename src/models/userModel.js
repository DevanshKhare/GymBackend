import mongoose from 'mongoose';

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

const User = mongoose.model('User', userSchema);
export default User;