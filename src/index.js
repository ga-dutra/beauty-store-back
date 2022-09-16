import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routers.js";
import routers from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

app.use(productsRoutes);

app.listen(process.env.PORT, () =>
  console.log("Listening on port " + process.env.PORT)
);
