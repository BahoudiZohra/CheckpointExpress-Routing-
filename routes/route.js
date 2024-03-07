const express = require("express");
const router = express.Router();


router.get("/services",(req,res)=>{
    res.render("OurService");
});


router.get("/contact",(req,res)=>{
    res.render("Contactus");
});


router.get("/home",(req,res)=>{
    res.render("Homepage");
});



module.exports = router;