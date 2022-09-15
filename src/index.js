import express from "express";
import cors from "cors";
import routers from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(5000, () => console.log("Listening on port 5000"));
