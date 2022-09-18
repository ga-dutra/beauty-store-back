import express from "express";
import { postWishList, postItemInCart } from "../controllers/user.controllers.js";

const router = express.Router();
router.post("/wish-list", postWishList);
router.post("/cart-list", postItemInCart);

export default router;