const express=require("express");
const app=express();
const mongoose=require("mongoose");
const  dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const moviesRoute=require("./routes/movies");
const listsRoute=require("./routes/lists");
var cors = require('cors')

app.use(cors())

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movie",moviesRoute);
app.use("/api/lists",listsRoute);


app.listen(8800,()=>{
    console.log("server running");
})