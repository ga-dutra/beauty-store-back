import { ObjectId } from "mongodb";
import db from "../database/db.js";
import { confirmedOrderEmail } from "../utils/emailResponse.js";

async function postWishList(req, res) {
  const { user } = res.locals;
  const productName = req.productName;

  try {
    const wishedProduct = await db
      .collection("products")
      .findOne({ name: productName });
    if (!wishedProduct) {
      return res.status(404).send({ error: "O produto não existe!" });
    }

    const userWishedProduct = {
      userId: user._id,
      productId: wishedProduct._id,
    };

    const isInWishList = await db
      .collection("wishList")
      .findOne(userWishedProduct);

    if (isInWishList) {
      await db.collection("wishList").deleteOne({
        _id: isInWishList._id,
        userId: user._id,
      });
      return res.status(200).send("product deleted on wish-list");
    } else {
      await db.collection("wishList").insertOne(wishedProduct);
      return res.status(201).send("product inserted on wish-list");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

async function listWishList(req, res) {
  const user = res.locals;

  try {
    const userWishList = await db
      .collection("wishList")
      .find({ userId: user._id })
      .toArray();

    return res.status(200).send(userWishList);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

async function postItemInCart(req, res) {
  const productId = req.headers.product;
  const user = res.locals.user;

  try {
    const productIsOnTheList = await db.collection("cartList").findOne({
      _id: productId,
      userId: user._id,
    });

    if (productIsOnTheList) {
      await db.collection("cartList").deleteOne({
        _id: productId,
        userId: user._id,
      });

      return res.status(200).send("product deleted on cart-list");
    } else {
      await db.collection("cartList").insertOne({
        _id: productId,
        userId: user._id,
      });

      return res.status(201).send("product inserted on cart-list");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getCartList(req, res) {
  const user = res.locals.user;

  try {
    const idOfProductsInCart = await db
      .collection("cartList")
      .find({ userId: user._id })
      .toArray();

    const productDetailsInCart = idOfProductsInCart.map(async (userProduct) => {
      const product = await db
        .collection("products")
        .findOne({ _id: ObjectId(userProduct._id) });
      return product;
    });

    res.status(200).send(productDetailsInCart);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function postOrder(req, res) {
  const user = res.locals.user;

  try {
    await db
      .collection("orders")
      .insertOne({ userId: user._id, orderDate: Date.now() });
    confirmedOrderEmail(user.email, user.name);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { postWishList, listWishList, postItemInCart, getCartList, postOrder };
