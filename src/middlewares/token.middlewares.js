import db from '../database/db.js';

async function checkToken (req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).send('É necessário estar logado para acessar esta página!');

    const session = await db.collection('sessions').findOne({ token });
    if (!session) return res.status(401).send('É necessário estar logado para acessar esta página!');

    const user = await db.collection('users').findOne({ _id: session.userId });
    if (!user) return res.status(401).send('É necessário estar logado para acessar esta página!');

    delete user.password;

    res.locals.user = user;
    next();
}

export { checkToken };