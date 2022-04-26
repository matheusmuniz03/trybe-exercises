module.exports = (req, res, next) => {
    const { username, email, password } = req.body;
  
    const isValidUsername = username.length < 3 ? true : false;
    const isValidEmail = email.includes('@') && email.includes('.com') ? false : true;
    const isValidPassword = password.length < 4 || password.length > 8 ? true : false;
    if (isValidUsername || isValidEmail || isValidPassword) return res.status(400).send({ message: 'invalid data' });

    next();
}