import db from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import signUpEmail from "../utils/emailResponse.js";

async function postUser(req, res) {
  const { name, email, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, 10);

  const existingEmail = await db.collection("users").findOne({ email });
  if (!existingEmail) {
    try {
      await db.collection("users").insertOne({
        name,
        email,
        password: passwordHash,
      });
      signUpEmail(email.email);
      return res.sendStatus(201);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    return res.status(409).send("Este e-mail já está em uso");
  }
}

async function postLogin(req, res) {
  const { email, password } = req.body;
  let user;
  let passwordIsValid = null;

  try {
    user = await db.collection("users").findOne({ email });
  } catch (error) {
    return res.status(500).send(error.message);
  }

  if (user) {
    passwordIsValid = bcrypt.compareSync(password, user.password);
  }

  if (user && passwordIsValid) {
    const token = uuid();

    try {
      await db.collection("sessions").insertOne({
        userId: user._id,
        token,
        lastStatus: Date.now(),
      });

      return res.send(token);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    return res.status(422).send("E-mail ou senha inválidos");
  }
}

export { postUser, postLogin };
