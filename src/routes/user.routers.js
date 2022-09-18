import express from "express";
import { listWishList, postWishList } from "../controllers/user.controllers";
import { tokenMiddleware } from "../middlewares/token.middlewares";

const router = express.Router();
router.get("/wishlist", listWishList);
router.post("/wishlist", tokenMiddleware, postWishList);

export default router;
