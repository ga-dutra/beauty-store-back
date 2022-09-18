import db from "../database/db.js";

async function postWishList(req, res) {
  try {
    const wishedProduct = await db.collection("wishlist").findOne({});
    await db.collection("wishlist").insertOne({});
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

async function postItemInCart(req, res) {
  const product = req.headers.product;
  const user = res.locals.user;

  try {
    const productIsOnTheList = await db.collection("cartList").findOne({
      _id: product._id,
      userId: user._id
    });

    if (productIsOnTheList) {
      await db.collection('cartList').deleteOne({
        _id: product._id,
        userId: user._id
      });
      
    } else {
      await db.collection('cartList').insertOne({
        _id: product._id,
        userId: user._id
      });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { postWishList, postItemInCart };