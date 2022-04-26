const validateUsername = (req, res, next)  => {
    const { username } = req.body;

    if (username.length < 3) return res.status(400).json({ message: "invalid data"});
    next();
}

const validateEmail = (req, res, next) => {
    const { email } = req.body;

    if (
        !email ||
        !email.includes('@') ||
        !email.includes('.com')
    ) return res.status(400).json({ message: "invalid data"});
    next();
}

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 3 || password.length > 8) return res.status(400).json({ message: "invalid data"});
    next();
}

module.exports = {
    validateUsername,
    validateEmail,
    validatePassword,
};
