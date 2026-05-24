import express from "express";
import isAuth from "../middleware/isAuth.js";
import { addVolunteer, deleteVolunteer, getVolunteers } from "../controllers/volunteer.controller.js";

const volunteerRouter=express.Router();

volunteerRouter.post("/register",addVolunteer);
volunteerRouter.get("/get-volunteers",isAuth,getVolunteers);
volunteerRouter.delete("/delete-volunteer/:id",isAuth,deleteVolunteer);

export default volunteerRouter;