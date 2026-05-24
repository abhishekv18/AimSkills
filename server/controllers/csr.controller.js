import { CSR } from "../models/csr.model.js";

export const addCsr = async (req, res) => {
    try {
        const { name, organization, email, phone, message } = req.body;

        // Validate input
        if (!name || !organization || !email || !phone || !message) {
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
      const csrExists = await CSR.findOne({ email });
      if(csrExists){
        return res.status(400).json({
            message: "CSR with this email already registered",
            success: false
        });
      }
        // Create a new volunteer object
        const csr = new CSR({
            name,
            organization,
            email,
            phone,
            message
        });
           await csr.save();
        return res.status(201).json({
            message: "Details Send Successfully",
            success: true,
            csr
        });
        



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getCsrs = async (req, res) => {
    try {
        const csrs = await CSR.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "CSRs fetched successfully",
            success: true,
            csrs
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const deleteCsr = async (req, res) => {
    try {
        const csrId = req.params.id;
        const csr = await CSR.findByIdAndDelete({ _id: csrId });
        if (!csr) {
            return res.status(404).json({
                message: "CSR not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "CSR deleted successfully",
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

