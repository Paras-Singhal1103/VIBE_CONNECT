const express = require("express");
const dotenv = require("dotenv");
const dbconnect = require("./dbconnect");
const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");
const userRouter = require("./routers/userRouter");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cloudinary = require('cloudinary').v2;

dotenv.config("./.env");


// Configuration 
cloudinary.config({
  secure:true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();


app.use(express.json({limit:'10mb'}));

app.use(
  cors({
    credentials: true,
    
  })
);
app.use(morgan("common"));
app.use(cookieParser());

app.get("/", async(req,res)=>{
  return res.send("APIs are working here.")
})
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/user", userRouter);
// const corsOptions ={

//                //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

const PORT = process.env.PORT || 4001;
dbconnect();
app.listen(PORT, () => {
  console.log(`Port is Listening :${PORT}`);
});
