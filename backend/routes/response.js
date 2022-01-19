import express from "express";
import { getResponseById, getAllResponse } from "../model/response.js";
const router = express.Router();

router.get("/", function (req, res) {
    const allResponse = getAllResponse();
  res.json({ Payload: "Hello Universe" });
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const selectedResponse = await getResponseById(id);
  res.json({ Payload: selectedResponse.rows });
  console.log("I was visited")
});

export default router;
