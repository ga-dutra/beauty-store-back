import express from "express";
import { list, postProducts } from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/products", list);
router.post("/products", postProducts);

export default router;
