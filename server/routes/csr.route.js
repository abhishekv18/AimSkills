import express from "express";
import isAuth from "../middleware/isAuth.js";
import { addCsr, deleteCsr, getCsrs } from "../controllers/csr.controller.js";

const csrRouter=express.Router();

csrRouter.post("/register",addCsr);
csrRouter.get("/get-csrs",isAuth,getCsrs);
csrRouter.delete("/delete-csr/:id",isAuth,deleteCsr);


export default csrRouter;