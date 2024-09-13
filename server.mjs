import express from "express"
import user from "./routes/users.mjs"

const app = express();

app.use("/users" , user);

app.listen(3000, (req , res) => console.log("Server is runaway"))