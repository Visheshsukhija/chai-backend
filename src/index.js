//require('dotenv').config({path:'./.env'});
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})
//import { DB_NAME } from "./constants";
import mongoose, { connect } from "mongoose";
import connectDB from "./db/index.js";
import express from "express";
import dns from 'dns';
dns.setServers(["1.1.1.1", "8.8.8.8"]);



connectDB()

/*
const app=express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error;
        })
    }
    catch(error){
        console.error("Error",error);
        throw error;
    }
})();*/