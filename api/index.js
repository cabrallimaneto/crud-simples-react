import express from "express";
import useRouter from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", useRouter)

app.listen(8800);
