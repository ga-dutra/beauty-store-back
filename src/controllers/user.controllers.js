import db from "../database/db.js";

async function postWishList(req, res) {
  const { user } = res.locals;
  const productName = req.productName;

  try {
    const wishedProduct = await db
      .collection("wishList")
      .findOne({ name: productName });
    if (wishedProduct) {
    }
    if (!wishedProduct) {
      const wishedProduct = {
        userId: user._id,
        product: req.productId,
      };
    }

    await db.collection("wishList").insertOne(wishedProduct);
    res.sendStatus(201);
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

      return res.status(200).send("delete");
    } else {
      await db.collection("cartList").insertOne({
        _id: productId,
        userId: user._id,
      });

      return res.status(200).send("insert");
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
    const productDetailsInCart = idOfProductsInCart.map(async (id) => {
      await db.collection("products").findOne({ _id: id });
    });
    res.status(200).send(productDetailsInCart);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { postWishList, listWishList, postItemInCart, getCartList };
