const fs = require('fs').promises;

const readContentFile = async (PATH) => {
    try {
        const content = await fs.readFile(PATH, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        return null;
    }
}

const writeContentFile = async (PATH, content) => {
    try {
        const arrContent = await readContentFile(PATH);

        arrContent.push(content);
        await fs.writeFile(PATH, JSON.stringify(arrContent));
    } catch (error) {
        return null;
    }
}

module.exports = {
    readContentFile,
    writeContentFile,
};