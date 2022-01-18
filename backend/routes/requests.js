import express from "express";
import { creatRequest, getRequests } from "../model/requests";

const router = express.Router();

/* GET users listing. */
router.post("/",  async function (req, res) {
    const requestItem = await creatRequest()
 
});

router.get("/",  async function( req, res){
 const allRequests = await getRequests()
res.json({Payload: allRequests.rows})

})

export default router;
