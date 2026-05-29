import express from "express";// it create a server
import dotenv from "dotenv";// it load environment variables from .env file
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";

import userRouter from "./routes/user.route.js";
import csrRouter from "./routes/csr.route.js";
import volunteerRouter from "./routes/volunteer.route.js";
import partnerRouter from "./routes/partner.route.js";
import hireRouter from "./routes/hire.route.js";
import contactRouter from "./routes/contact.route.js";
import blogRouter from "./routes/blog.route.js";
import galleryRouter from "./routes/gallery.route.js";
const app = express();


const corsOptions = {
    origin: ['https://aim-skills.vercel.app','http://localhost:5173',],
    credentials: true,
};


app.use(cors(corsOptions));


app.use(express.json());
app.use(cookieParser());


app.use("/api/user",userRouter);
app.use("/api/csr",csrRouter);
app.use("/api/volunteer",volunteerRouter);
app.use("/api/partner",partnerRouter);
app.use("/api/hire",hireRouter);
app.use("/api/contact",contactRouter);
app.use("/api/blog",blogRouter);
app.use("/api/gallery",galleryRouter);


const PORT=process.env.PORT || 6000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDb();
});
