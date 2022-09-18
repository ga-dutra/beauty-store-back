import db from "../database/db.js";

async function postWishList(req, res) {
  const { session, user } = res.locals;
  const productName = req.name;

  try {
    const wishedProduct = await db
      .collection("wishlist")
      .findOne({ name: productName });
    if (wishedProduct) {
    }
    if (!wishedProduct) {
      const wishedProduct = {
        userId: req.user._id,
        product: req.productId,
      };
    }

    await db.collection("wishlist").insertOne(wishedProduct);
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
      .collection("wishlist")
      .find({ userId: user._id })
      .toArray();

    return res.status(200).send(userWishList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { postWishList, listWishList };
