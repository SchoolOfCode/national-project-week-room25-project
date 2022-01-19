import express from "express";

const router = express.Router();


router.get("/", function(req, res){
    res.json({Payload: "Hello Universe"})
})

export default router