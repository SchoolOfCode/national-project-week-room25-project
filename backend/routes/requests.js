import express from "express";
import { creatRequest, getRequests } from "../model/requests.js";

const router = express.Router();

/* GET users listing. */
router.post("/",  async function (req, res) {
    const requestItem = await creatRequest()
 
});

router.get("/",  async function( req, res){
 const allRequests = await getRequests()
res.json({Payload: allRequests.rows})

})

router.get("/:id", function(req, res){
    id = Number(req.params.id)
    
})

export default router;
