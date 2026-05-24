import express from "express";
import isAuth from "../middleware/isAuth.js";
import { addHire, deleteHire, getHires } from "../controllers/hire.controller.js";

const hireRouter=express.Router();

hireRouter.post("/register",addHire);
hireRouter.get("/get-hire",isAuth,getHires);
hireRouter.delete("/delete-hire/:id",isAuth,deleteHire);


export default hireRouter;