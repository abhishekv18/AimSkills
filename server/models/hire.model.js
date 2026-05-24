import mongoose from "mongoose";

const hireSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    },
{timestamps:true});
export const Hire = mongoose.model('Hire', hireSchema);