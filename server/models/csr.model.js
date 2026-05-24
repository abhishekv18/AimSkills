import mongoose from "mongoose";

const csrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    organization: {
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
    message: {
        type: String,
        required: true,
    },
    },
{timestamps:true});
export const CSR = mongoose.model('CSR', csrSchema);