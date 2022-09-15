import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRoutes from "./routes/products.routers.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(productsRoutes);

app.listen(5000, () => console.log("Listening on port 5000"));
