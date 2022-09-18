import db from "../database/db";

async function tokenMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({ error: "Token is required!" });
  }

  try {
    const session = await db.collection("sessions").findOne({
      token,
    });

    if (!session) {
      return res.status(404).send({ error: "Session not found!" });
    }

    const user = await db.collection("users").findOne({
      _id: session.userId,
    });

    res.locals.session = session;
    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

export { tokenMiddleware };
