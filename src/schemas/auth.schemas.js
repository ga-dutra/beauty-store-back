import joi from 'joi';

const newUserSchema = joi.object({
    name: joi.string().empty(' ').required(),
    email: joi.string().email().required(),
    password: joi.string().empty(' ').required(),
    passwordConfirmation: joi.ref('password')
});
const userLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().empty(' ').required()
});

async function checkNewUser (req, res, next) {
    const validation = newUserSchema.validate(req.body, {abortEarly: false});
    const password = req.body.password;
    const strongPassword = (password.length >= 8 && password.match(/[a-z]+/) && password.match(/[A-Z]+/) && password.match(/[!@#$%&*]/));

    if (!strongPassword) return res.status(422).send('A senha precisa corresponder aos critérios');

    if (validation.error) {
        const errors = validation.error.details.map(details => details.message);
        res.status(422).send(errors);
    }

    next();
}

async function checkUserLogin (req, res, next) {
    const validation = userLoginSchema.validate(req.body, {abortEarly: false});

    if (validation.error) {
        const errors = validation.error.details.map(details => details.message);
        res.status(422).send(errors);
    }

    next();
}

export { checkNewUser, checkUserLogin };