import express from "express";
import { creat, delet, getdata, getotp, login, update } from "../controllers/user.controller.js";
const router = express.Router();
router.route("/user/sign").post(creat)
router.route("/user/login").post(login)
router.route("/user/get").get(getdata)
router.route("/user/update").put(update)
router.route("/user/delet").delete(delet)
router.route("/user/otp").post(getotp)







export default router;