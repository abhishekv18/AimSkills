import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
      organization: {
        type: String,
        required: true,
    },
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
    city:{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    },
{timestamps:true});
export const Partner = mongoose.model('Partner', partnerSchema);