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
