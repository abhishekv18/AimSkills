import mongoose from "mongoose";

const volSchema = new mongoose.Schema({
    name: {
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
    skills:{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    },
{timestamps:true});
export const Volunteer = mongoose.model('Volunteer', volSchema);