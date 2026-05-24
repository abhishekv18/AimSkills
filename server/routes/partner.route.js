import express from "express";
import isAuth from "../middleware/isAuth.js";
import { addPartner, deletePartner, getPartners } from "../controllers/partner.conroller.js";

const partnerRouter=express.Router();

partnerRouter.post("/register",addPartner);
partnerRouter.get("/get-partners",isAuth,getPartners);
partnerRouter.delete("/delete-partner/:id",isAuth,deletePartner);
export default partnerRouter;