import express from "express";
import {
  creatRequest,
  getRequests,
  getRequestById,
} from "../model/requests.js";

const router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res) {
  console.log("working");
  const requestToAdd = req.body;
  console.log(requestToAdd);
  const requestItem = await creatRequest(requestToAdd);
  res.json({ Payload: requestItem.rows });
});

router.get("/", async function (req, res) {
  const allRequests = await getRequests();
  res.json({ Payload: allRequests.rows });
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const selectedRequest = await getRequestById(id);
  res.json({ Payload: selectedRequest.rows });
});

export default router;
