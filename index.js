import express from "express"
import connectdb from "./config/db.js";
import router from "./routes/user.route.js";
import { config } from "dotenv";

const app = express();
app.use(express.json());
connectdb();
config()

app.use(router)
app.listen(process.env.PORT || 2021,(req,res)=>{
    console.log("server connection");
})