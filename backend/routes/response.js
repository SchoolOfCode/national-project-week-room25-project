import express from "express";

const router = express.Router();

router.get("/", function (req, res) {
  res.json({ Payload: "Hello Universe" });
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const selectedResponse = await getResponseById(id);
  res.json({ Payload: selectedResponse.rows });
});

export default router;
