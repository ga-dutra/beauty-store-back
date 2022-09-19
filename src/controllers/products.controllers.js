import db from "../database/db.js";
import { productsList } from "../database/productsList.js";

async function list(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

async function postProducts(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    if (products.length !== 0) {
      return res
        .status(200)
        .send({ message: "Products list already created in database" });
    }
    await db.collection("products").insertMany(productsList);
    res.status(201).send({ message: "Products list created in database" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

export { list, postProducts };
