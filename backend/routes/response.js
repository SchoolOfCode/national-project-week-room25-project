import express from "express";
import {
  getResponseById,
  getAllResponse,
  createResponse,
} from "../model/response.js";
const router = express.Router();

router.get("/", async function (req, res) {
  const allResponse = await getAllResponse();
  res.json({ Payload: allResponse });
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const selectedResponse = await getResponseById(id);
  res.json({ Payload: selectedResponse.rows });
  console.log("I was visited");
});

router.post("/", async function (req, res) {
  const responseToAdd = req.params.body;
  const responseItem = await createResponse();
});

export default router;
