import express from "express";
import {
  getResponseById,
  getAllResponse,
  createResponse,
  updateVoteCount
} from "../model/response.js";
const router = express.Router();

router.get("/", async function (req, res) {
  const allResponse = await getAllResponse();
  res.json({ Payload: allResponse.rows });
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const selectedResponse = await getResponseById(id);
  res.json({ Payload: selectedResponse.rows });
  console.log("I was visited");
});

router.post("/", async function (req, res) {
  const responseToAdd = req.body;
  const responseItem = await createResponse(responseToAdd);
  res.json({Payload: responseItem.rows})
});

router.post("/:id", async function(req, res){
  const id = Number(req.params.id);
  const rawData = req.body;
  const voteToAdd = rawData.response_id;
  console.log(voteToAdd)
  const updatedVote = await updateVoteCount(id, voteToAdd);
  res.json({Payload: updatedVote.rows})
})

export default router;
