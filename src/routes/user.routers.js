import express from "express";
import { postWishList, postItemInCart, getCartList } from "../controllers/user.controllers.js";
import { checkToken } from "../middlewares/token.middlewares.js";

const router = express.Router();
router.post("/wish-list", checkToken, postWishList);
router.post("/cart-list", checkToken, postItemInCart);
router.get("/cart-list", checkToken, getCartList);

export default router;