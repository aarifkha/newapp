import express from "express"
import connectdb from "./config/db.js";
import router from "./routes/user.route.js";


const app = express();
app.use(express.json());
connectdb();
app.use(router)
app.listen(2021,(req,res)=>{
    console.log("server connection");
})