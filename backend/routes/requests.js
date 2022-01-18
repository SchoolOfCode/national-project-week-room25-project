import express from "express";
import { creatRequest } from "../model/requests";

const router = express.Router();

/* GET users listing. */
router.post("/",  async function (req, res) {
    const requestItem = await creatRequest()
 
});

export default router;
