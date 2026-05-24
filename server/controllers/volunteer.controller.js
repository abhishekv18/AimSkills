import { Volunteer } from "../models/volunteer.model.js";

export const addVolunteer = async (req, res) => {
    try {
        const { name, email, phone, skills, message } = req.body;

        // Validate input
        if (!name || !email || !phone || !skills || !message) {
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
      const volunteerExists = await Volunteer.findOne({ email });
      if(volunteerExists){
        return res.status(400).json({
            message: "Volunteer with this email already registered",
            success: false
        });
      }
        // Create a new volunteer object
        const volunteer = new Volunteer({
            name,
            email,
            phone,
            skills,
            message
        });
           await volunteer.save();
        return res.status(201).json({
            message: "Details Send Successfully",
            success: true,
            volunteer
        });
        



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Volunteers fetched successfully",
            success: true,
            volunteers
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}




export const deleteVolunteer = async (req, res) => {
    try {
        const volunteerId = req.params.id;
        const volunteer = await Volunteer.findByIdAndDelete({ _id: volunteerId });
        if (!volunteer) {
            return res.status(404).json({
                message: "Volunteer not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Volunteer deleted successfully",
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
