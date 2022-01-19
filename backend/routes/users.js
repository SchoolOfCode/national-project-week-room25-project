import express from "express";
import { getUserById, getUsers } from "../model/users.js";
const router = express.Router();


/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
//   next();
// });

router.get("/", async function(req, res){
  const allUsers = await getUsers();
  console.log(allUsers.rows)
  res.json({Payload: allUsers.rows});

})

router.get("/:id", async function(req, res){
  const id = Number(req.params.id)
  const selectedUser = await getUserById(id)
  res.json({Payload: selectedUser.rows})
})

export default router;
