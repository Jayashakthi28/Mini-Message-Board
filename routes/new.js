const express= require("express");
const moment = require("moment");
const { messages } = require("./message");
const router=express.Router();

router.get("/",(req,res,err)=>{
    res.render("new",{title:"New Post"});
})

router.post("/",(req,res,err)=>{
    let data={...req.body};
    data.added=moment().toDate();
    messages.push(data);
    res.redirect("/");
})

module.exports=router;