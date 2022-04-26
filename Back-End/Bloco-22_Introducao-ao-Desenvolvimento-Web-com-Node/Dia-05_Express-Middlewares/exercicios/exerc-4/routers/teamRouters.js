const router = require('express').Router;
const {
    validationName,
    validationInitials,
    validationCountry,
} = require('../middlewares/validations');
const {
    readContentFile,
    writeContentFile,
} = require('../helpers/readFile');
const PATH_FILE = './teams.json';

router.get('/', async (_req, res) => {
    const teams = await readContentFile(PATH_FILE);

    res.status(200).json({ teams });
});

router.post('/',
    validationName,
    validationInitials,
    validationCountry,
    async (req, res) => {
        const newTeam = {
            ...req.body,
            initials: req.body.initials.toUpperCase(),
        };
        const team = await writeContentFile(PATH_FILE, newTeam);

        res.status(200).json({ team });
    }
);

module.exports = router;