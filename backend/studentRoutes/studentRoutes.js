const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/StudentSchema");


router.post("/create-student",(req,res,next) =>{
    studentSchema.create(req.body,(err,data) =>{
        if(err){
            return next(err);
        }else{
             res.json(data)
        }
    })
})

router.get("/",(req,res,next) =>{
    studentSchema.find((err,data) =>{
        if(err){
            return next(err);
        }else{
            return res.json(data)
        }
    });
});

module.exports = router
