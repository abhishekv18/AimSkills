import { Hire } from "../models/hire.model.js";

export const addHire = async (req, res) => {
    try {
        const { companyName, name, email, phone, role, message } = req.body;

        // Validate input
        if (!companyName || !name || !email || !phone || !role || !message) {
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
      const hireExists = await Hire.findOne({ email });
      if(hireExists){
        return res.status(400).json({
            message: "Hire with this email already registered",
            success: false
        });
      }
        // Create a new hire object
        const hire = new Hire({
            companyName,
            name,
            email,
            phone,
            role,
            message
        });
           await hire.save();
        return res.status(201).json({
            message: "Details Send Successfully",
            success: true,
            hire        
        });
        



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getHires = async (req, res) => {
    try {
        const hires = await Hire.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Hires fetched successfully",
            success: true,
            hires
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
          
export const deleteHire = async (req, res) => {
    try {
        const hireId = req.params.id;
        const hire = await Hire.findByIdAndDelete({ _id: hireId });
        if (!hire) {
            return res.status(404).json({
                message: "Hire not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Hire deleted successfully",
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