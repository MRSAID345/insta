import express from "express"
import users from "../db/users.json" assert { type : "json" };
const router = express.Router()

router.get("/all" , (req , res)=> {
    res.send(users)
})

export default router
