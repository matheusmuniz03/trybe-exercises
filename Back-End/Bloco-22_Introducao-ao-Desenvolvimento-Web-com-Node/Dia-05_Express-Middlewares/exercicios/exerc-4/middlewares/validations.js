const validationName = (req, res, next) => {
    const { name } = req.body;

    if (!name || name.length < 5) return res.status(400).json({ message: 'invalid data' });
    next();
}

const validationInitials = (req, res, next) => {
    const { initials } = req.body;
    const initialsUpperCase = initials.toUpperCase();

    if (!initials || initials.length > 3 || initials !== initialsUpperCase) return res.status(400).json({ message: 'invalid data' });
    next()
}

const validationCountry = (req, res, next) => {
    const { country } = req.body;
    
    if (!country || country.length < 3) return res.status(400).json({ message: 'invalid data' });
    next();
}

module.exports = {
    validationName,
    validationInitials,
    validationCountry,
};