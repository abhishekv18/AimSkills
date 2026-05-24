import { CSR } from "../models/csr.model.js";
import { Partner } from "../models/partner.model.js";

export const addPartner = async (req, res) => {
    try {
        const { organization,name,  email, phone,city, message } = req.body;

        // Validate input
        if (!name || !organization || !email || !phone || !city || !message) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format",
                success: false
            });
        }
        const phoneRegex = /^[6-9]\d{9}$/; // Assuming phone number is 10 digits
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                message: "Invalid phone number format",
                success: false
            });
        }
      const partnerExists = await Partner.findOne({ email });
      if(partnerExists){
        return res.status(400).json({
            message: "Partner with this email already registered",
            success: false
        });
      }
        // Create a new partner object
        const partner = new Partner({
            organization,
            name,
            email,
            phone,
            city,
            message
        });
           await partner.save();
        return res.status(201).json({
            message: "Details Send Successfully",
            success: true,
            partner
        });
        



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getPartners = async (req, res) => {
    try {
        const partners = await Partner.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Partners fetched successfully",
            success: true,
            partners
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deletePartner = async (req, res) => {
    try {
        const partnerId = req.params.id;
        const partner = await Partner.findByIdAndDelete({ _id: partnerId });
        if (!partner) {
            return res.status(404).json({
                message: "Partner not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Partner deleted successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

