import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import nodemailer from "nodemailer";
import User from "../models/user.schma.js";

export const creat = async (req, res) => {
    try {
        var val = Math.floor(1000 + Math.random() * 9000);
   req.body.otp=val

        const find = await User.findOne({ email: req.body.email })
        if (find) {
            res.send({
                msg: "email already exict",
                data: {}
            })
        } else {
            var pass = await bcrypt.hash(req.body.password, 11)
            req.body.password = pass
            let users = await User.create(req.body)
            users.token = await jwt.sign({ time: Date(), userid: users._id }, "aarif")
            if (users) {
                res.send({
                    msg: "sign",
                    data: users

                })
            }
        }
    } catch (err) {
        res.send({
            status: false,
            msg: "something wrong",
            data: err
        })
    }

}

export const login = async (req, res) => {

try {
    

    const find = await User.findOne({ email: req.body.email })

    // var mobilefind = await User.findOne({mobile:req.body.mobile})
    if (find) {
        var checkpass = await bcrypt.compare(req.body.password, find.password)
        // var compers = await bcrypt.compare(req.body.password, mobilefind.password)
        if (checkpass) {
            find.token = await jwt.sign({ time: Date(), userid: find._id }, "aarif")
            res.send({
                status: true,
                msg: 'login successfully',
                data: find

            })
        } else {
            res.send({
                status: false,
                msg: 'password doesn`t match ',
                data: {}
            })
        }
    } else {
        res.send({
            status: false,
            msg: "email not found",
            data: {}
        })
    }
} catch (error) {
    res.send(error)
}
}


export  const getdata = async (req,res)=>{
    const find = await User.find()
    if(find){
        res.send({
            status:true,
            msg:"data fatch successfully",
            data:find
        })
    }else{
        res.send({
            status:false,
            msg:"data not found"
        })
    }
}



export const update = async (req,res)=>{
    const find = await User.findByIdAndUpdate({_id:req.body.id},req.body)
    if(find){
        res.send({
            status:true,
            msg:"data update successfully",
            data:find
        })
    }else{
        res.send({
           status:false,
           msg:"data found with given id or something wrong with update",
           data:{}
        })
     }
}


export const delet = async (req,res)=>{
    const find = await User.findByIdAndDelete({_id:req.body.id})
    if(find){
        res.send({
            status:true,
            msg:"delet successfully",
            data:find
        })
    }else{
        res.send({
           status:false,
           msg:"id  not found, this is not avaalible",
           data:{}
        })
     }
}



export const getotp = async (req,res)=>{
    var val = Math.floor(1000 + Math.random() * 9000);

    var transporter = nodemailer.createTransport({
        host :'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:'haidarali4408@gmail.com',
            pass:'qqppuqmyyhjzurda'
        }
    })
    
    var mailOptions = {
        from:'haidarali4408@gmail.com',
        to:'haidarali4408@gmail.com',
        subject:'sending mail ',
        html:' <p>asdfghjk '+ val + "</p>"
    }
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
    
        }else{
            console.log("mail has been sent",info.response);
        }
    })

    
    console.log(val);
     req.body.otp = val

    const data = await User.findByIdAndUpdate({_id:req.body.id},req.body)
    data.otp = req.body.otp
    if(data){
        res.send({
            status:true,
            msg:"otp send successfully",
            data:data

        })
    }else{
        res.send({
            status:false,
            msg:"something wrong"
        })
    }
}

