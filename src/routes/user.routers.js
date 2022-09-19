import express from "express";
import {
  postWishList,
  listWishList,
  postItemInCart,
  getCartList,
  postOrder,
} from "../controllers/user.controllers.js";
import { checkToken } from "../middlewares/token.middlewares.js";

const router = express.Router();
router.post("/wish-list", checkToken, postWishList);
router.get("/wish-list", checkToken, listWishList);
router.post("/cart-list", checkToken, postItemInCart);
router.get("/cart-list", checkToken, getCartList);
router.get("/orders", checkToken, postOrder);

export default router;
